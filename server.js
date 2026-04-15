const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Database Configuration
const pool = new Pool({
    connectionString: 'postgresql://neondb_owner:npg_WHgyh8A5pxlt@ep-winter-bonus-anqsylz5-pooler.c-6.us-east-1.aws.neon.tech/neondb?sslmode=require'
});

// Email Configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'abdulmumeenapata72@gmail.com',
        pass: process.env.EMAIL_PASSWORD || 'your-app-password-here' // Use environment variable in production
    }
});

// Initialize Database Tables
async function initializeDatabase() {
    try {
        // Create customers table
        await pool.query(`
            CREATE TABLE IF NOT EXISTS customers (
                id SERIAL PRIMARY KEY,
                full_name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                phone VARCHAR(50),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        // Create orders table
        await pool.query(`
            CREATE TABLE IF NOT EXISTS orders (
                id SERIAL PRIMARY KEY,
                customer_id INTEGER REFERENCES customers(id),
                product_id INTEGER NOT NULL,
                product_name VARCHAR(255) NOT NULL,
                product_category VARCHAR(100),
                price_per_yard DECIMAL(10, 2) NOT NULL,
                yards INTEGER NOT NULL,
                total_amount DECIMAL(10, 2) NOT NULL,
                message TEXT,
                address TEXT,
                status VARCHAR(50) DEFAULT 'pending',
                action VARCHAR(100) DEFAULT 'order_placed',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        // Create customer_actions table for tracking
        await pool.query(`
            CREATE TABLE IF NOT EXISTS customer_actions (
                id SERIAL PRIMARY KEY,
                customer_id INTEGER REFERENCES customers(id),
                action VARCHAR(100) NOT NULL,
                product_id INTEGER,
                product_name VARCHAR(255),
                details JSONB,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        // Create comments table
        await pool.query(`
            CREATE TABLE IF NOT EXISTS comments (
                id SERIAL PRIMARY KEY,
                customer_id INTEGER REFERENCES customers(id),
                full_name VARCHAR(255) NOT NULL,
                email VARCHAR(255),
                comment TEXT NOT NULL,
                rating INTEGER CHECK (rating >= 1 AND rating <= 5),
                is_approved BOOLEAN DEFAULT TRUE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        console.log('✓ Database tables initialized');
    } catch (error) {
        console.error('Database initialization error:', error);
    }
}

// API Routes

// Submit Order
app.post('/api/orders', async (req, res) => {
    const {
        productId,
        productName,
        productCategory,
        pricePerYard,
        fullName,
        email,
        phone,
        yards,
        totalAmount,
        message,
        address,
        action
    } = req.body;

    const client = await pool.connect();

    try {
        await client.query('BEGIN');

        // Insert or update customer
        const customerResult = await client.query(`
            INSERT INTO customers (full_name, email, phone)
            VALUES ($1, $2, $3)
            ON CONFLICT (email) DO UPDATE
            SET full_name = $1, phone = $3, updated_at = CURRENT_TIMESTAMP
            RETURNING id
        `, [fullName, email, phone]);

        const customerId = customerResult.rows[0].id;

        // Insert order
        const orderResult = await client.query(`
            INSERT INTO orders (
                customer_id, product_id, product_name, product_category,
                price_per_yard, yards, total_amount, message, address, action
            )
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
            RETURNING id
        `, [
            customerId, productId, productName, productCategory,
            pricePerYard, yards, totalAmount, message, address, action || 'order_placed'
        ]);

        const orderId = orderResult.rows[0].id;

        // Track customer action
        await client.query(`
            INSERT INTO customer_actions (customer_id, action, product_id, product_name, details)
            VALUES ($1, $2, $3, $4, $5)
        `, [
            customerId,
            action || 'order_placed',
            productId,
            productName,
            JSON.stringify({ yards, totalAmount, orderId })
        ]);

        await client.query('COMMIT');

        // Send email notification
        const mailOptions = {
            from: 'abdulmumeenapata72@gmail.com',
            to: 'abdulmumeenapata72@gmail.com',
            subject: `New Order: ${productName}`,
            html: `
                <h2>New Order Received</h2>
                <hr>
                <h3>Product Details</h3>
                <p><strong>Product:</strong> ${productName}</p>
                <p><strong>Category:</strong> ${productCategory}</p>
                <p><strong>Price per Yard:</strong> ₦${pricePerYard.toLocaleString('en-NG')}</p>
                <p><strong>Yards Ordered:</strong> ${yards}</p>
                <p><strong>Total Amount:</strong> ₦${totalAmount.toLocaleString('en-NG')}</p>
                <hr>
                <h3>Customer Details</h3>
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Address:</strong> ${address || 'Not provided'}</p>
                <p><strong>Message:</strong> ${message || 'None'}</p>
                <hr>
                <p><strong>Order ID:</strong> #${orderId}</p>
                <p><em>Order placed on: ${new Date().toLocaleString()}</em></p>
            `
        };

        // Try to send email, but don't fail if it doesn't work
        try {
            await transporter.sendMail(mailOptions);
            console.log(`✓ Order email sent for order #${orderId}`);
        } catch (emailError) {
            console.log('Email notification skipped (configure EMAIL_PASSWORD to enable):', emailError.message);
        }

        res.status(201).json({
            success: true,
            message: 'Order submitted successfully',
            orderId: orderId
        });

    } catch (error) {
        await client.query('ROLLBACK');
        console.error('Order submission error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to submit order',
            error: error.message
        });
    } finally {
        client.release();
    }
});

// Get Customer Orders
app.get('/api/customers/:email/orders', async (req, res) => {
    try {
        const { email } = req.params;
        
        const result = await pool.query(`
            SELECT o.*, c.full_name, c.phone
            FROM orders o
            JOIN customers c ON o.customer_id = c.id
            WHERE c.email = $1
            ORDER BY o.created_at DESC
        `, [email]);

        res.json({
            success: true,
            orders: result.rows
        });
    } catch (error) {
        console.error('Get customer orders error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve orders',
            error: error.message
        });
    }
});

// Get Customer Actions History
app.get('/api/customers/:email/actions', async (req, res) => {
    try {
        const { email } = req.params;
        
        const result = await pool.query(`
            SELECT ca.*, c.full_name, c.email, c.phone
            FROM customer_actions ca
            JOIN customers c ON ca.customer_id = c.id
            WHERE c.email = $1
            ORDER BY ca.created_at DESC
        `, [email]);

        res.json({
            success: true,
            actions: result.rows
        });
    } catch (error) {
        console.error('Get customer actions error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve actions',
            error: error.message
        });
    }
});

// Track Customer Action (page views, clicks, etc.)
app.post('/api/customers/track', async (req, res) => {
    const { email, action, productId, productName, details } = req.body;

    try {
        // Find or create customer
        let customerResult;
        if (email) {
            customerResult = await pool.query(`
                INSERT INTO customers (full_name, email)
                VALUES ($1, $2)
                ON CONFLICT (email) DO UPDATE SET updated_at = CURRENT_TIMESTAMP
                RETURNING id
            `, ['Anonymous', email]);
        } else {
            return res.status(400).json({
                success: false,
                message: 'Email is required for tracking'
            });
        }

        const customerId = customerResult.rows[0].id;

        // Track action
        await pool.query(`
            INSERT INTO customer_actions (customer_id, action, product_id, product_name, details)
            VALUES ($1, $2, $3, $4, $5)
        `, [customerId, action, productId, productName, JSON.stringify(details || {})]);

        res.json({
            success: true,
            message: 'Action tracked successfully'
        });
    } catch (error) {
        console.error('Track action error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to track action',
            error: error.message
        });
    }
});

// Get All Orders (Admin)
app.get('/api/admin/orders', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT o.*, c.full_name, c.email, c.phone
            FROM orders o
            JOIN customers c ON o.customer_id = c.id
            ORDER BY o.created_at DESC
        `);

        res.json({
            success: true,
            orders: result.rows
        });
    } catch (error) {
        console.error('Get all orders error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve orders',
            error: error.message
        });
    }
});

// Update Order Status
app.put('/api/orders/:id/status', async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        await pool.query(`
            UPDATE orders
            SET status = $1
            WHERE id = $2
        `, [status, id]);

        res.json({
            success: true,
            message: 'Order status updated'
        });
    } catch (error) {
        console.error('Update order status error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update order status',
            error: error.message
        });
    }
});

// Submit Comment
app.post('/api/comments', async (req, res) => {
    const { fullName, email, comment, rating } = req.body;

    if (!fullName || !comment) {
        return res.status(400).json({
            success: false,
            message: 'Name and comment are required'
        });
    }

    const client = await pool.connect();

    try {
        await client.query('BEGIN');

        // Insert or get customer
        let customerId;
        if (email) {
            const customerResult = await client.query(`
                INSERT INTO customers (full_name, email)
                VALUES ($1, $2)
                ON CONFLICT (email) DO UPDATE
                SET full_name = $1, updated_at = CURRENT_TIMESTAMP
                RETURNING id
            `, [fullName, email]);
            customerId = customerResult.rows[0].id;
        } else {
            const customerResult = await client.query(`
                INSERT INTO customers (full_name, email)
                VALUES ($1, $2)
                RETURNING id
            `, [fullName, email || null]);
            customerId = customerResult.rows[0].id;
        }

        // Insert comment
        const commentResult = await client.query(`
            INSERT INTO comments (customer_id, full_name, email, comment, rating)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id, created_at
        `, [customerId, fullName, email, comment, rating || null]);

        await client.query('COMMIT');

        res.status(201).json({
            success: true,
            message: 'Comment submitted successfully',
            commentId: commentResult.rows[0].id,
            createdAt: commentResult.rows[0].created_at
        });

    } catch (error) {
        await client.query('ROLLBACK');
        console.error('Comment submission error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to submit comment',
            error: error.message
        });
    } finally {
        client.release();
    }
});

// Get All Approved Comments
app.get('/api/comments', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT c.id, c.full_name, c.comment, c.rating, c.created_at
            FROM comments c
            WHERE c.is_approved = TRUE
            ORDER BY c.created_at DESC
        `);

        res.json({
            success: true,
            comments: result.rows
        });
    } catch (error) {
        console.error('Get comments error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve comments',
            error: error.message
        });
    }
});

// Get Comments Count
app.get('/api/comments/count', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT COUNT(*) as total, COALESCE(AVG(rating), 0) as avg_rating
            FROM comments
            WHERE is_approved = TRUE
        `);

        res.json({
            success: true,
            total: parseInt(result.rows[0].total),
            avgRating: parseFloat(result.rows[0].avg_rating).toFixed(1)
        });
    } catch (error) {
        console.error('Get comments count error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve comments count',
            error: error.message
        });
    }
});

// Serve index.html for root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
async function start() {
    await initializeDatabase();
    
    app.listen(PORT, () => {
        console.log(`\n🚀 Premium Textiles Server running on http://localhost:${PORT}`);
        console.log(`📊 API endpoints:`);
        console.log(`   POST /api/orders - Submit new order`);
        console.log(`   GET  /api/customers/:email/orders - Get customer orders`);
        console.log(`   GET  /api/customers/:email/actions - Get customer actions`);
        console.log(`   POST /api/customers/track - Track customer action`);
        console.log(`   GET  /api/admin/orders - Get all orders (admin)`);
        console.log(`   PUT  /api/orders/:id/status - Update order status\n`);
    });
}

start();
