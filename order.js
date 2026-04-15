// Product Data
const products = [
    // Cotton Fabrics
    {
        id: 1,
        name: "Premium Cotton Print",
        category: "cotton",
        price: 3500,
        description: "Soft and breathable cotton fabric, perfect for everyday clothing",
        badge: "Best Seller",
        image: "https://images.unsplash.com/photo-1558171816-5c9c5d2c7b4e?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 2,
        name: "Egyptian Cotton White",
        category: "cotton",
        price: 5000,
        description: "Luxurious Egyptian cotton with superior softness and durability",
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d635?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 3,
        name: "Cotton Blend Striped",
        category: "cotton",
        price: 2800,
        description: "Versatile cotton blend with modern striped pattern",
        badge: "",
        image: "https://images.unsplash.com/photo-1528384785426-9b76915755e2?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 4,
        name: "Organic Cotton Plain",
        category: "cotton",
        price: 4200,
        description: "100% organic cotton, eco-friendly and comfortable",
        badge: "New",
        image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 25,
        name: "Cotton Voile Pastel",
        category: "cotton",
        price: 3200,
        description: "Lightweight cotton voile with soft pastel shades, ideal for summer dresses",
        badge: "",
        image: "https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 26,
        name: "Cotton Canvas Heavy",
        category: "cotton",
        price: 4800,
        description: "Durable heavy cotton canvas perfect for bags and upholstery",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 27,
        name: "Cotton Poplin Check",
        category: "cotton",
        price: 3600,
        description: "Crisp cotton poplin with classic checkered pattern",
        badge: "",
        image: "https://images.unsplash.com/photo-1603650064523-74d3f3c0c468?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 28,
        name: "Cotton Jersey Knit",
        category: "cotton",
        price: 3900,
        description: "Soft stretchy cotton jersey, perfect for t-shirts and casual wear",
        badge: "Best Seller",
        image: "https://images.unsplash.com/photo-1595341888016-a392ef84873d?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 49,
        name: "Cotton Seersucker Blue",
        category: "cotton",
        price: 3800,
        description: "Puckered seersucker cotton with textured finish, great for warm weather",
        badge: "",
        image: "https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 50,
        name: "Cotton Twill Khaki",
        category: "cotton",
        price: 4100,
        description: "Durable twill weave cotton with diagonal rib pattern",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 51,
        name: "Cotton Chambray Light",
        category: "cotton",
        price: 3700,
        description: "Lightweight chambray with soft hand feel and subtle texture",
        badge: "New",
        image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 52,
        name: "Cotton Flannel Plaid",
        category: "cotton",
        price: 4500,
        description: "Brushed cotton flannel with warm plaid pattern, perfect for cooler days",
        badge: "",
        image: "https://images.unsplash.com/photo-1558171816-5c9c5d2c7b4e?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 53,
        name: "Cotton Muslin Natural",
        category: "cotton",
        price: 2500,
        description: "Ultra-soft muslin with gauzy texture, ideal for baby clothes and linens",
        badge: "",
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d635?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 54,
        name: "Cotton Oxford Solid",
        category: "cotton",
        price: 4000,
        description: "Classic oxford weave with button-down shirt perfection",
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1528384785426-9b76915755e2?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 55,
        name: "Cotton Batiste White",
        category: "cotton",
        price: 3300,
        description: "Sheer lightweight batiste with delicate drape and softness",
        badge: "",
        image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 56,
        name: "Cotton Corduroy Tan",
        category: "cotton",
        price: 5200,
        description: "Textured corduroy with raised wale ridges, vintage appeal",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 97,
        name: "Cotton Lawn Floral",
        category: "cotton",
        price: 3400,
        description: "Ultra-fine cotton lawn with delicate floral print, perfect for blouses",
        badge: "New",
        image: "https://images.unsplash.com/photo-1558171816-5c9c5d2c7b4e?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 98,
        name: "Cotton Sateen Ivory",
        category: "cotton",
        price: 4300,
        description: "Smooth cotton sateen with subtle sheen, ideal for dress shirts",
        badge: "",
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d635?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 99,
        name: "Cotton Duck Canvas",
        category: "cotton",
        price: 5600,
        description: "Heavy-duty duck canvas for bags, shoes, and home decor projects",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1528384785426-9b76915755e2?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 100,
        name: "Cotton Gauze Double",
        category: "cotton",
        price: 3800,
        description: "Double-layer cotton gauze with soft crinkle, great for baby items",
        badge: "",
        image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 101,
        name: "Cotton Quilting Patch",
        category: "cotton",
        price: 2900,
        description: "Premium quilting cotton with vibrant patchwork-ready patterns",
        badge: "Best Seller",
        image: "https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 102,
        name: "Cotton Broadcloth White",
        category: "cotton",
        price: 3100,
        description: "Fine broadcloth with tight weave, perfect for formal shirts",
        badge: "",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 103,
        name: "Cotton Pique Polo",
        category: "cotton",
        price: 4400,
        description: "Textured pique weave ideal for polo shirts and sportswear",
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1603650064523-74d3f3c0c468?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 104,
        name: "Cotton Terry Cloth",
        category: "cotton",
        price: 3600,
        description: "Absorbent terry cloth perfect for towels and bathrobes",
        badge: "",
        image: "https://images.unsplash.com/photo-1595341888016-a392ef84873d?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 105,
        name: "Cotton Eyelet Embroidery",
        category: "cotton",
        price: 4700,
        description: "Delicate eyelet embroidery cotton with romantic lace-like details",
        badge: "New",
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 106,
        name: "Cotton Denim Light",
        category: "cotton",
        price: 4000,
        description: "Lightweight cotton denim with soft hand, perfect for shirts",
        badge: "",
        image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 107,
        name: "Cotton Velveteen Plum",
        category: "cotton",
        price: 5800,
        description: "Soft velveteen with plush pile, luxurious feel for special garments",
        badge: "Luxury",
        image: "https://images.unsplash.com/photo-1558171816-5c9c5d2c7b4e?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 108,
        name: "Cotton Madras Plaid",
        category: "cotton",
        price: 4200,
        description: "Classic madras plaid with handwoven character and vibrant colors",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d635?w=500&h=500&fit=crop&q=80"
    },

    // Silk & Satin
    {
        id: 5,
        name: "Pure Silk Fabric",
        category: "silk",
        price: 12000,
        description: "Luxurious pure silk for elegant dresses and traditional attire",
        badge: "Luxury",
        image: "https://images.unsplash.com/photo-1618220179427-4c5a2c7a6dce?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 6,
        name: "Satin Glossy Red",
        category: "silk",
        price: 8500,
        description: "High-quality satin with beautiful glossy finish",
        badge: "",
        image: "https://images.unsplash.com/photo-1528459105319-611c5a6385ce?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 7,
        name: "Silk Charmeuse Blue",
        category: "silk",
        price: 15000,
        description: "Premium silk charmeuse with smooth drape and shine",
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 8,
        name: "Bridal Satin White",
        category: "silk",
        price: 10000,
        description: "Perfect bridal fabric with elegant sheen",
        badge: "Best Seller",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 29,
        name: "Silk Organza Sheer",
        category: "silk",
        price: 13500,
        description: "Delicate sheer silk organza with crisp hand, perfect for overlays",
        badge: "New",
        image: "https://images.unsplash.com/photo-1603650064523-74d3f3c0c468?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 30,
        name: "Duchess Satin Ivory",
        category: "silk",
        price: 11000,
        description: "Heavy duchess satin with structured drape for formal wear",
        badge: "Luxury",
        image: "https://images.unsplash.com/photo-1595341888016-a392ef84873d?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 31,
        name: "Silk Crepe de Chine",
        category: "silk",
        price: 14000,
        description: "Lightweight silk crepe with matte finish and beautiful drape",
        badge: "",
        image: "https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 32,
        name: "Satin Back Crepe",
        category: "silk",
        price: 9500,
        description: "Double-faced fabric with satin on one side and crepe on the other",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 57,
        name: "Silk Habotai Lining",
        category: "silk",
        price: 8000,
        description: "Lightweight habotai silk, perfect for linings and scarves",
        badge: "",
        image: "https://images.unsplash.com/photo-1618220179427-4c5a2c7a6dce?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 58,
        name: "Silk Dupioni Champagne",
        category: "silk",
        price: 16000,
        description: "Textured dupioni with irregular slubs, luxurious champagne tone",
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1528459105319-611c5a6385ce?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 59,
        name: "Silk Noil Raw",
        category: "silk",
        price: 10500,
        description: "Matte finish noil silk with subtle texture and natural feel",
        badge: "",
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 60,
        name: "Silk Peau de Soie",
        category: "silk",
        price: 14500,
        description: "Heavy silk with fine cross-rib texture, elegant drape",
        badge: "Luxury",
        image: "https://images.unsplash.com/photo-1603650064523-74d3f3c0c468?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 61,
        name: "Silk Georgette Black",
        category: "silk",
        price: 12500,
        description: "Sheer georgette with crepe texture, perfect for flowing garments",
        badge: "New",
        image: "https://images.unsplash.com/photo-1595341888016-a392ef84873d?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 62,
        name: "Silk Taffeta Emerald",
        category: "silk",
        price: 17000,
        description: "Crisp taffeta with rustling hand and vibrant emerald color",
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 63,
        name: "Silk Velvet Plum",
        category: "silk",
        price: 18000,
        description: "Plush silk velvet with rich pile and sumptuous texture",
        badge: "Luxury",
        image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 64,
        name: "Silk Chiffon Blush",
        category: "silk",
        price: 11500,
        description: "Ultra-sheer chiffon with ethereal drape and soft blush tone",
        badge: "Best Seller",
        image: "https://images.unsplash.com/photo-1618220179427-4c5a2c7a6dce?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 109,
        name: "Silk Brocade Gold",
        category: "silk",
        price: 19000,
        description: "Rich brocade silk with raised gold patterns, perfect for formal wear",
        badge: "Luxury",
        image: "https://images.unsplash.com/photo-1528459105319-611c5a6385ce?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 110,
        name: "Silk Mikado Ivory",
        category: "silk",
        price: 16500,
        description: "Heavy mikado silk with structured drape, ideal for bridal gowns",
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 111,
        name: "Silk Shantung Rose",
        category: "silk",
        price: 13000,
        description: "Textured shantung with beautiful slubs, elegant rose pink shade",
        badge: "",
        image: "https://images.unsplash.com/photo-1603650064523-74d3f3c0c468?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 112,
        name: "Silk Habutai Paint",
        category: "silk",
        price: 9000,
        description: "Smooth habutai silk, perfect base for hand-painted designs",
        badge: "New",
        image: "https://images.unsplash.com/photo-1595341888016-a392ef84873d?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 113,
        name: "Silk Crepe Back Satin",
        category: "silk",
        price: 14000,
        description: "Reversible fabric with crepe texture on one side and satin shine on the other",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 114,
        name: "Silk Faille Black",
        category: "silk",
        price: 15500,
        description: "Ribbed faille silk with subtle cross-rib texture, elegant black",
        badge: "",
        image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 115,
        name: "Silk Gazar Coral",
        category: "silk",
        price: 17500,
        description: "Crisp gazar silk that holds shapes beautifully, vibrant coral tone",
        badge: "Luxury",
        image: "https://images.unsplash.com/photo-1618220179427-4c5a2c7a6dce?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 116,
        name: "Silk Mousseline Mint",
        category: "silk",
        price: 12000,
        description: "Sheer mousseline silk with lightweight airy feel, soft mint green",
        badge: "New",
        image: "https://images.unsplash.com/photo-1528459105319-611c5a6385ce?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 117,
        name: "Silk Pongee Natural",
        category: "silk",
        price: 10500,
        description: "Lightweight pongee with natural texture, perfect for linings",
        badge: "",
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 118,
        name: "Silk Radzmoire Navy",
        category: "silk",
        price: 18500,
        description: "Watered silk with moire effect, deep navy with subtle patterns",
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1603650064523-74d3f3c0c468?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 119,
        name: "Silk Wash Purple",
        category: "silk",
        price: 11000,
        description: "Washable silk with casual elegance, rich purple shade",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1595341888016-a392ef84873d?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 120,
        name: "Silk Jacquard Teal",
        category: "silk",
        price: 16000,
        description: "Intricately woven jacquard silk with ornate teal patterns",
        badge: "Luxury",
        image: "https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=500&h=500&fit=crop&q=80"
    },

    // Ankara & African Prints
    {
        id: 9,
        name: "Ankara Wax Print",
        category: "ankara",
        price: 4500,
        description: "Vibrant African wax print with traditional patterns",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1590739225287-bd31519780c3?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 10,
        name: "Dutch Wax Ankara",
        category: "ankara",
        price: 6500,
        description: "High-quality Dutch wax print with bold colors",
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 11,
        name: "Ankara Geometric Print",
        category: "ankara",
        price: 3800,
        description: "Modern geometric patterns on premium cotton base",
        badge: "",
        image: "https://images.unsplash.com/photo-1603093272356-1e5e4a45e2d4?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 12,
        name: "Super Wax Ankara",
        category: "ankara",
        price: 5500,
        description: "Super wax quality with rich, vibrant colors",
        badge: "New",
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 33,
        name: "Ankara Floral Burst",
        category: "ankara",
        price: 4200,
        description: "Bold floral patterns with vibrant color bursts on cotton base",
        badge: "",
        image: "https://images.unsplash.com/photo-1590739225287-bd31519780c3?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 34,
        name: "Ankara Kente Inspired",
        category: "ankara",
        price: 5800,
        description: "Kente-inspired patterns celebrating West African heritage",
        badge: "Best Seller",
        image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 35,
        name: "Ankara Adire Style",
        category: "ankara",
        price: 4800,
        description: "Tie-dye inspired Adire patterns with modern twist",
        badge: "New",
        image: "https://images.unsplash.com/photo-1603093272356-1e5e4a45e2d4?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 36,
        name: "Ankara Mash Print",
        category: "ankara",
        price: 3500,
        description: "Affordable mash print with colorful African motifs",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 65,
        name: "Ankara Batik Sunset",
        category: "ankara",
        price: 5200,
        description: "Hand-drawn batik with warm sunset tones and intricate details",
        badge: "",
        image: "https://images.unsplash.com/photo-1590739225287-bd31519780c3?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 66,
        name: "Ankara Dashiki Bold",
        category: "ankara",
        price: 4600,
        description: "Bold dashiki patterns with regal color combinations",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 67,
        name: "Ankara Mud Cloth",
        category: "ankara",
        price: 5000,
        description: "Inspired by traditional Bogolan mud cloth of Mali",
        badge: "New",
        image: "https://images.unsplash.com/photo-1603093272356-1e5e4a45e2d4?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 68,
        name: "Ankara Cowrie Shell",
        category: "ankara",
        price: 6200,
        description: "Ankara print featuring cowrie shell motifs, symbol of wealth",
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 69,
        name: "Ankara Ankara Royal",
        category: "ankara",
        price: 5500,
        description: "Royal blue and gold combination with majestic patterns",
        badge: "",
        image: "https://images.unsplash.com/photo-1590739225287-bd31519780c3?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 70,
        name: "Ankara Tribe Mark",
        category: "ankara",
        price: 4000,
        description: "Traditional tribal markings translated into modern print design",
        badge: "Best Seller",
        image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 71,
        name: "Ankara Calabash",
        category: "ankara",
        price: 3800,
        description: "Calabash-inspired patterns with earthy tones and organic shapes",
        badge: "",
        image: "https://images.unsplash.com/photo-1603093272356-1e5e4a45e2d4?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 72,
        name: "Ankara Beadwork",
        category: "ankara",
        price: 4900,
        description: "Inspired by traditional African beadwork with vibrant colors",
        badge: "New",
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 121,
        name: "Ankara Safari Sunset",
        category: "ankara",
        price: 4700,
        description: "Warm sunset tones with safari-inspired patterns, earthy feel",
        badge: "",
        image: "https://images.unsplash.com/photo-1590739225287-bd31519780c3?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 122,
        name: "Ankara Palm Wine",
        category: "ankara",
        price: 4100,
        description: "Traditional palm wine tapping ceremony inspired motifs",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 123,
        name: "Ankara Market Day",
        category: "ankara",
        price: 3900,
        description: "Bustling market scene translated into colorful abstract patterns",
        badge: "",
        image: "https://images.unsplash.com/photo-1603093272356-1e5e4a45e2d4?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 124,
        name: "Ankara Royal Stool",
        category: "ankara",
        price: 5600,
        description: "Ashanti royal stool symbols woven into premium Ankara design",
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 125,
        name: "Ankara Drum Beat",
        category: "ankara",
        price: 4300,
        description: "Rhythmic drum patterns translated into bold Ankara prints",
        badge: "New",
        image: "https://images.unsplash.com/photo-1590739225287-bd31519780c3?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 126,
        name: "Ankara Harvest Gold",
        category: "ankara",
        price: 4500,
        description: "Golden harvest celebration with rich earth tones and geometric shapes",
        badge: "Best Seller",
        image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 127,
        name: "Ankara Village Life",
        category: "ankara",
        price: 3700,
        description: "Daily village scenes and communal life in vibrant storytelling",
        badge: "",
        image: "https://images.unsplash.com/photo-1603093272356-1e5e4a45e2d4?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 128,
        name: "Ankara Spirit Mask",
        category: "ankara",
        price: 5100,
        description: "Traditional ceremonial mask patterns with spiritual significance",
        badge: "Luxury",
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 129,
        name: "Ankara River Flow",
        category: "ankara",
        price: 4000,
        description: "Flowing river patterns with cool blues and greens, calming design",
        badge: "New",
        image: "https://images.unsplash.com/photo-1590739225287-bd31519780c3?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 130,
        name: "Ankara Fire Dance",
        category: "ankara",
        price: 4600,
        description: "Dynamic fire dance celebration with warm reds and oranges",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 131,
        name: "Ankara Story Cloth",
        category: "ankara",
        price: 4800,
        description: "Traditional storytelling through symbols and proverbs in fabric",
        badge: "",
        image: "https://images.unsplash.com/photo-1603093272356-1e5e4a45e2d4?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 132,
        name: "Ankara Chief Crown",
        category: "ankara",
        price: 5900,
        description: "Royal crown motifs with gold accents, premium chief collection",
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&h=500&fit=crop&q=80"
    },

    // Lace Fabrics
    {
        id: 13,
        name: "Swiss Lace Gold",
        category: "lace",
        price: 18000,
        description: "Exquisite Swiss lace with intricate gold embroidery",
        badge: "Luxury",
        image: "https://images.unsplash.com/photo-1603650064523-74d3f3c0c468?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 14,
        name: "French Lace White",
        category: "lace",
        price: 15000,
        description: "Elegant French lace perfect for special occasions",
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1595341888016-a392ef84873d?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 15,
        name: "Cord Lace Beige",
        category: "lace",
        price: 9500,
        description: "Beautiful cord lace with detailed patterns",
        badge: "",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 16,
        name: "Guipure Lace Cream",
        category: "lace",
        price: 13500,
        description: "High-quality guipure lace with floral motifs",
        badge: "Best Seller",
        image: "https://images.unsplash.com/photo-1618220179427-4c5a2c7a6dce?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 37,
        name: "Swiss Lace Emerald",
        category: "lace",
        price: 19500,
        description: "Premium Swiss lace with stunning emerald green embroidery",
        badge: "Luxury",
        image: "https://images.unsplash.com/photo-1528459105319-611c5a6385ce?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 38,
        name: "Venise Lace Navy",
        category: "lace",
        price: 16000,
        description: "Heavy Venise lace with bold raised patterns",
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 39,
        name: "Chantilly Lace Black",
        category: "lace",
        price: 14500,
        description: "Delicate Chantilly lace with fine floral net background",
        badge: "New",
        image: "https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 40,
        name: "Embroidered Tulle Lace",
        category: "lace",
        price: 11000,
        description: "Sheer tulle base with intricate embroidered detailing",
        badge: "",
        image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 73,
        name: "Swiss Lace Royal Blue",
        category: "lace",
        price: 20000,
        description: "Premium Swiss lace with royal blue embroidery and stone details",
        badge: "Luxury",
        image: "https://images.unsplash.com/photo-1603650064523-74d3f3c0c468?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 74,
        name: "Cord Lace Burgundy",
        category: "lace",
        price: 12000,
        description: "Rich burgundy cord lace with raised corded patterns",
        badge: "",
        image: "https://images.unsplash.com/photo-1595341888016-a392ef84873d?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 75,
        name: "Nigerian Swiss Lace",
        category: "lace",
        price: 17500,
        description: "Nigerian-style Swiss lace with intricate beadwork and stones",
        badge: "Best Seller",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 76,
        name: "Organza Lace Peach",
        category: "lace",
        price: 10500,
        description: "Lightweight organza base with delicate lace overlay in peach",
        badge: "New",
        image: "https://images.unsplash.com/photo-1618220179427-4c5a2c7a6dce?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 77,
        name: "Eyelash Lace Ivory",
        category: "lace",
        price: 15500,
        description: "Delicate eyelash trim lace, perfect for bridal and evening wear",
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1528459105319-611c5a6385ce?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 78,
        name: "Sequin Lace Silver",
        category: "lace",
        price: 22000,
        description: "Glittering sequin-embellished lace for show-stopping garments",
        badge: "Luxury",
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 79,
        name: "Crochet Lace White",
        category: "lace",
        price: 13000,
        description: "Hand-crafted crochet lace with bohemian charm",
        badge: "",
        image: "https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 80,
        name: "Alencon Lace Blush",
        category: "lace",
        price: 18500,
        description: "French Alencon lace with needle-run cord outlining floral patterns",
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 133,
        name: "Swiss Lace Ruby Red",
        category: "lace",
        price: 21000,
        description: "Premium Swiss lace with stunning ruby red embroidery and stones",
        badge: "Luxury",
        image: "https://images.unsplash.com/photo-1603650064523-74d3f3c0c468?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 134,
        name: "Cord Lace Lavender",
        category: "lace",
        price: 11500,
        description: "Delicate cord lace in soft lavender with raised floral patterns",
        badge: "",
        image: "https://images.unsplash.com/photo-1595341888016-a392ef84873d?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 135,
        name: "Swiss Lace Amethyst",
        category: "lace",
        price: 22500,
        description: "Luxurious Swiss lace with amethyst purple embroidery and crystal details",
        badge: "Luxury",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 136,
        name: "Tulle Lace Applique",
        category: "lace",
        price: 14000,
        description: "Sheer tulle with beautiful applique lace designs, versatile use",
        badge: "New",
        image: "https://images.unsplash.com/photo-1618220179427-4c5a2c7a6dce?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 137,
        name: "Cord Lace Champagne",
        category: "lace",
        price: 13500,
        description: "Elegant champagne colored cord lace with intricate corded patterns",
        badge: "Best Seller",
        image: "https://images.unsplash.com/photo-1528459105319-611c5a6385ce?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 138,
        name: "Re-Embroidered Lace",
        category: "lace",
        price: 16500,
        description: "Base lace fabric with additional embroidery for extra luxury",
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 139,
        name: "Swiss Lace Sapphire",
        category: "lace",
        price: 23000,
        description: "Deep sapphire blue Swiss lace with premium stone embellishments",
        badge: "Luxury",
        image: "https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 140,
        name: "Stretch Lace Nude",
        category: "lace",
        price: 10000,
        description: "Comfortable stretch lace with flexibility, perfect nude shade",
        badge: "",
        image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 141,
        name: "Water Soluble Lace",
        category: "lace",
        price: 15000,
        description: "Delicate water soluble lace with fine details, premium quality",
        badge: "New",
        image: "https://images.unsplash.com/photo-1603650064523-74d3f3c0c468?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 142,
        name: "3D Flower Lace White",
        category: "lace",
        price: 19000,
        description: "Three-dimensional floral lace with raised flower details, bridal favorite",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1595341888016-a392ef84873d?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 143,
        name: "Beaded Lace Gold",
        category: "lace",
        price: 25000,
        description: "Exquisite lace with hand-sewn gold beads, ultimate luxury for special occasions",
        badge: "Luxury",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 144,
        name: "Eyelash Lace Burgundy",
        category: "lace",
        price: 17000,
        description: "Rich burgundy eyelash lace with delicate scalloped edges",
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1618220179427-4c5a2c7a6dce?w=500&h=500&fit=crop&q=80"
    },

    // Linen
    {
        id: 17,
        name: "Pure Linen Natural",
        category: "linen",
        price: 7500,
        description: "100% pure linen with natural texture and breathability",
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 18,
        name: "Linen Blend Grey",
        category: "linen",
        price: 5500,
        description: "Comfortable linen blend, wrinkle-resistant",
        badge: "",
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d635?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 19,
        name: "Irish Linen White",
        category: "linen",
        price: 9000,
        description: "Premium Irish linen with superior quality",
        badge: "Luxury",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 20,
        name: "Stonewashed Linen",
        category: "linen",
        price: 6800,
        description: "Soft stonewashed finish for casual elegance",
        badge: "New",
        image: "https://images.unsplash.com/photo-1528384785426-9b76915755e2?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 41,
        name: "Linen Cotton Mix Sage",
        category: "linen",
        price: 6200,
        description: "Linen-cotton blend with soft sage green tone",
        badge: "",
        image: "https://images.unsplash.com/photo-1603650064523-74d3f3c0c468?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 42,
        name: "Belgian Linen Charcoal",
        category: "linen",
        price: 8500,
        description: "Premium Belgian linen in sophisticated charcoal grey",
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1595341888016-a392ef84873d?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 43,
        name: "Linen Stripe Terra",
        category: "linen",
        price: 5800,
        description: "Terracotta striped linen with Mediterranean charm",
        badge: "New",
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 44,
        name: "Linen Damask Cream",
        category: "linen",
        price: 7800,
        description: "Elegant damask weave linen for table and home decor",
        badge: "Best Seller",
        image: "https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 81,
        name: "Linen Slub Olive",
        category: "linen",
        price: 6500,
        description: "Textured slub linen in rich olive green, natural irregularities",
        badge: "",
        image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 82,
        name: "Linen Herringbone Sand",
        category: "linen",
        price: 7200,
        description: "Classic herringbone weave in warm sandy tone",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d635?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 83,
        name: "Linen Waffle Weave",
        category: "linen",
        price: 6900,
        description: "Textured waffle weave linen, perfect for towels and robes",
        badge: "",
        image: "https://images.unsplash.com/photo-1528384785426-9b76915755e2?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 84,
        name: "Linen Oatmeal",
        category: "linen",
        price: 5800,
        description: "Natural oatmeal colored linen with rustic appeal",
        badge: "New",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 85,
        name: "Linen Chambray Sky",
        category: "linen",
        price: 6700,
        description: "Lightweight linen chambray in soft sky blue",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1603650064523-74d3f3c0c468?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 86,
        name: "Linen Canvas Heavy",
        category: "linen",
        price: 8000,
        description: "Heavy linen canvas for upholstery and structured garments",
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1595341888016-a392ef84873d?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 87,
        name: "Linen Gauze Mist",
        category: "linen",
        description: "Ultra-lightweight linen gauze with ethereal drape",
        price: 7000,
        badge: "",
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 88,
        name: "Linen Tweed Heather",
        category: "linen",
        price: 9200,
        description: "Textured linen tweed with heathered flecks, autumn elegance",
        badge: "Luxury",
        image: "https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 145,
        name: "Linen Yarn Dye Indigo",
        category: "linen",
        price: 7400,
        description: "Yarn-dyed linen in deep indigo, rich color with natural texture",
        badge: "New",
        image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 146,
        name: "Linen Crossweave Rust",
        category: "linen",
        price: 8200,
        description: "Unique crossweave pattern in warm rust, statement fabric",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d635?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 147,
        name: "Linen Vintage Wash",
        category: "linen",
        price: 7800,
        description: "Pre-washed linen with soft vintage feel, broken-in comfort",
        badge: "",
        image: "https://images.unsplash.com/photo-1528384785426-9b76915755e2?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 148,
        name: "Linen Jacquard Leaf",
        category: "linen",
        price: 9500,
        description: "Jacquard woven linen with botanical leaf pattern, elegant design",
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 149,
        name: "Linen Ikat Blue",
        category: "linen",
        price: 8600,
        description: "Traditional ikat dye technique on linen, beautiful blue patterns",
        badge: "New",
        image: "https://images.unsplash.com/photo-1603650064523-74d3f3c0c468?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 150,
        name: "Linen Basketweave Tan",
        category: "linen",
        price: 7200,
        description: "Basketweave texture in natural tan, casual sophistication",
        badge: "",
        image: "https://images.unsplash.com/photo-1595341888016-a392ef84873d?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 151,
        name: "Linen Pinstripe Charcoal",
        category: "linen",
        price: 7600,
        description: "Classic pinstripe pattern on linen, professional yet relaxed",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 152,
        name: "Linen Melange Grey",
        category: "linen",
        price: 6800,
        description: "Melange blend linen with subtle color variation, modern grey",
        badge: "",
        image: "https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 153,
        name: "Linen Crinkle Coral",
        category: "linen",
        price: 7000,
        description: "Natural crinkle texture in vibrant coral, effortless style",
        badge: "New",
        image: "https://images.unsplash.com/photo-1528384785426-9b76915755e2?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 154,
        name: "Linen Double Weave",
        category: "linen",
        price: 9800,
        description: "Heavy double weave linen for structured garments, premium quality",
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 155,
        name: "Linen Shibori Indigo",
        category: "linen",
        price: 8400,
        description: "Japanese shibori dye technique on linen, artistic indigo patterns",
        badge: "Luxury",
        image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 156,
        name: "Linen Honeycomb Beige",
        category: "linen",
        price: 7500,
        description: "Honeycomb texture in warm beige, tactile and beautiful",
        badge: "",
        image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=500&fit=crop&q=80"
    },

    // Denim
    {
        id: 21,
        name: "Classic Blue Denim",
        category: "denim",
        price: 4500,
        description: "Traditional blue denim for jeans and jackets",
        badge: "Best Seller",
        image: "https://images.unsplash.com/photo-1528384785426-9b76915755e2?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 22,
        name: "Black Stretch Denim",
        category: "denim",
        price: 5000,
        description: "Stretch denim with comfortable fit",
        badge: "",
        image: "https://images.unsplash.com/photo-1558171816-5c9c5d2c7b4e?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 23,
        name: "Light Wash Denim",
        category: "denim",
        price: 4200,
        description: "Trendy light wash denim for casual wear",
        badge: "New",
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d635?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 24,
        name: "Selvedge Denim",
        category: "denim",
        price: 8500,
        description: "Premium selvedge denim with authentic finish",
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 45,
        name: "Acid Wash Denim",
        category: "denim",
        price: 5200,
        description: "Retro acid wash denim with vintage appeal",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1603650064523-74d3f3c0c468?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 46,
        name: "Raw Indigo Denim",
        category: "denim",
        price: 7500,
        description: "Unwashed raw indigo denim that ages beautifully",
        badge: "Luxury",
        image: "https://images.unsplash.com/photo-1595341888016-a392ef84873d?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 47,
        name: "Distressed Denim",
        category: "denim",
        price: 4800,
        description: "Pre-distressed denim with worn-in character",
        badge: "",
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 48,
        name: "Japanese Denim Premium",
        category: "denim",
        price: 12000,
        description: "Ultra-premium Japanese denim with exceptional craftsmanship",
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 89,
        name: "Denim Chambray Light",
        category: "denim",
        price: 4600,
        description: "Lightweight chambray denim with soft hand feel",
        badge: "",
        image: "https://images.unsplash.com/photo-1528384785426-9b76915755e2?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 90,
        name: "Denim Twill Black",
        category: "denim",
        price: 5500,
        description: "Black denim twill with subtle diagonal weave",
        badge: "New",
        image: "https://images.unsplash.com/photo-1558171816-5c9c5d2c7b4e?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 91,
        name: "Denim Bull Duck Heavy",
        category: "denim",
        price: 6000,
        description: "Heavy-weight duck denim for workwear and rugged use",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d635?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 92,
        name: "Denim Stretch White",
        category: "denim",
        price: 5800,
        description: "White stretch denim perfect for summer styles",
        badge: "",
        image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 93,
        name: "Denim Printed Floral",
        category: "denim",
        price: 5300,
        description: "Denim with printed floral pattern, unique statement piece",
        badge: "New",
        image: "https://images.unsplash.com/photo-1603650064523-74d3f3c0c468?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 94,
        name: "Denim Vintage Rinse",
        category: "denim",
        price: 6200,
        description: "Vintage rinse denim with aged character and patina",
        badge: "Best Seller",
        image: "https://images.unsplash.com/photo-1595341888016-a392ef84873d?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 95,
        name: "Denim Slub Mid Blue",
        category: "denim",
        price: 5700,
        description: "Slub denim with irregular texture and character",
        badge: "",
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 96,
        name: "Denim Cone Mills USA",
        category: "denim",
        price: 14000,
        description: "Legendary Cone Mills selvedge, American denim heritage",
        badge: "Luxury",
        image: "https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 157,
        name: "Denim ecru Natural",
        category: "denim",
        price: 4900,
        description: "Natural undyed denim in ecru shade, eco-friendly choice",
        badge: "",
        image: "https://images.unsplash.com/photo-1528384785426-9b76915755e2?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 158,
        name: "Denim Tencel Blend",
        category: "denim",
        price: 6500,
        description: "Soft tencel-blend denim with beautiful drape, sustainable fabric",
        badge: "New",
        image: "https://images.unsplash.com/photo-1558171816-5c9c5d2c7b4e?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 159,
        name: "Denim Crackle Grey",
        category: "denim",
        price: 5400,
        description: "Crackle finish denim in sophisticated grey, unique texture",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d635?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 160,
        name: "Denim Brushed Black",
        category: "denim",
        price: 5800,
        description: "Brushed surface denim with soft hand feel, deep black color",
        badge: "",
        image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 161,
        name: "Denim Coated Indigo",
        category: "denim",
        price: 6800,
        description: "Coated denim with subtle shine, premium indigo base",
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1603650064523-74d3f3c0c468?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 162,
        name: "Denim Jacquard Pattern",
        category: "denim",
        price: 7200,
        description: "Jacquard woven denim with subtle pattern, elevated basics",
        badge: "New",
        image: "https://images.unsplash.com/photo-1595341888016-a392ef84873d?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 163,
        name: "Denim Lightning Wash",
        category: "denim",
        price: 5600,
        description: "Unique lightning wash effect with striking contrast patterns",
        badge: "",
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 164,
        name: "Denim Foam Indigo",
        category: "denim",
        price: 6200,
        description: "Foam-dyed indigo denim with eco-friendly process, rich color",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 165,
        name: "Denim Slub Deep Blue",
        category: "denim",
        price: 5900,
        description: "Slub yarn denim with irregular texture, deep indigo blue",
        badge: "",
        image: "https://images.unsplash.com/photo-1528384785426-9b76915755e2?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 166,
        name: "Denim Crosshatch Grey",
        category: "denim",
        price: 6400,
        description: "Crosshatch weave pattern in modern grey, visual interest",
        badge: "New",
        image: "https://images.unsplash.com/photo-1558171816-5c9c5d2c7b4e?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 167,
        name: "Denim Ring Spun Vintage",
        category: "denim",
        price: 8200,
        description: "Ring-spun yarns for authentic vintage character, premium quality",
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d635?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 168,
        name: "Denim Broken Twill",
        category: "denim",
        price: 7800,
        description: "Broken twill weave prevents leg twist, classic workwear denim",
        badge: "Best Seller",
        image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=500&fit=crop&q=80"
    },
    {
        id: 169,
        name: "Denim Zimbabwe Cotton",
        category: "denim",
        price: 9500,
        description: "Premium Zimbabwe cotton blend denim, exceptional softness",
        badge: "Luxury",
        image: "https://images.unsplash.com/photo-1603650064523-74d3f3c0c468?w=500&h=500&fit=crop&q=80"
    }
];

// DOM Elements
const orderForm = document.getElementById('orderForm');
const yardsInput = document.getElementById('yards');
const pricePerYardEl = document.getElementById('pricePerYard');
const quantityDisplay = document.getElementById('quantityDisplay');
const totalAmountEl = document.getElementById('totalAmount');
const loadingOverlay = document.getElementById('loadingOverlay');
const successModal = document.getElementById('successModal');

// Get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));

// Find the product
const product = products.find(p => p.id === productId);

// If product not found, redirect to main page
if (!product) {
    alert('Product not found!');
    window.location.href = 'index.html';
}

// Format price in Naira
function formatPrice(price) {
    return '₦' + price.toLocaleString('en-NG');
}

// Get category display name
function getCategoryName(category) {
    const names = {
        'cotton': 'Cotton Fabrics',
        'silk': 'Silk & Satin',
        'ankara': 'Ankara & African Prints',
        'lace': 'Lace Fabrics',
        'linen': 'Linen',
        'denim': 'Denim'
    };
    return names[category] || category;
}

// Populate product details
function populateProductDetails() {
    document.getElementById('orderImage').src = product.image;
    document.getElementById('orderImage').alt = product.name;
    document.getElementById('orderCategory').textContent = getCategoryName(product.category);
    document.getElementById('orderName').textContent = product.name;
    document.getElementById('orderDescription').textContent = product.description;
    document.getElementById('orderPrice').innerHTML = `${formatPrice(product.price)} <span>/yard</span>`;
    pricePerYardEl.textContent = formatPrice(product.price);
    updateTotal();
    
    // Initialize color picker
    initializeColorPicker();
}

// Initialize color picker with appropriate colors for the product category
function initializeColorPicker() {
    const colorOptions = document.getElementById('colorOptions');
    const selectedColorInput = document.getElementById('selectedColor');
    const colorPickerContainer = document.getElementById('colorPickerContainer');
    
    // Define color palettes for different fabric categories
    const colorPalettes = {
        cotton: [
            { name: 'White', hex: '#FFFFFF' },
            { name: 'Natural', hex: '#F5F5DC' },
            { name: 'Ivory', hex: '#FFFFF0' },
            { name: 'Light Blue', hex: '#ADD8E6' },
            { name: 'Navy', hex: '#000080' },
            { name: 'Grey', hex: '#808080' },
            { name: 'Black', hex: '#000000' },
            { name: 'Sage Green', hex: '#9DC183' },
            { name: 'Dusty Rose', hex: '#DCAE96' },
            { name: 'Cream', hex: '#FFFDD0' }
        ],
        silk: [
            { name: 'Champagne', hex: '#F7E7CE' },
            { name: 'Ivory', hex: '#FFFFF0' },
            { name: 'Gold', hex: '#FFD700' },
            { name: 'Burgundy', hex: '#800020' },
            { name: 'Emerald', hex: '#50C878' },
            { name: 'Navy', hex: '#000080' },
            { name: 'Black', hex: '#000000' },
            { name: 'Blush Pink', hex: '#FFB6C1' },
            { name: 'Silver', hex: '#C0C0C0' },
            { name: 'Royal Blue', hex: '#4169E1' }
        ],
        ankara: [
            { name: 'Royal Blue', hex: '#4169E1' },
            { name: 'Gold', hex: '#FFD700' },
            { name: 'Kente Green', hex: '#00A86B' },
            { name: 'Sunset Orange', hex: '#FF4500' },
            { name: 'Burgundy', hex: '#800020' },
            { name: 'Purple', hex: '#800080' },
            { name: 'Black', hex: '#000000' },
            { name: 'White', hex: '#FFFFFF' },
            { name: 'Coral', hex: '#FF7F50' },
            { name: 'Turquoise', hex: '#40E0D0' }
        ],
        lace: [
            { name: 'White', hex: '#FFFFFF' },
            { name: 'Ivory', hex: '#FFFFF0' },
            { name: 'Cream', hex: '#FFFDD0' },
            { name: 'Gold', hex: '#FFD700' },
            { name: 'Silver', hex: '#C0C0C0' },
            { name: 'Blush Pink', hex: '#FFB6C1' },
            { name: 'Navy', hex: '#000080' },
            { name: 'Burgundy', hex: '#800020' },
            { name: 'Emerald', hex: '#50C878' },
            { name: 'Black', hex: '#000000' }
        ],
        linen: [
            { name: 'Natural', hex: '#F5F5DC' },
            { name: 'White', hex: '#FFFFFF' },
            { name: 'Oatmeal', hex: '#E0D5C1' },
            { name: 'Sage', hex: '#9DC183' },
            { name: 'Sand', hex: '#C2B280' },
            { name: 'Charcoal', hex: '#36454F' },
            { name: 'Navy', hex: '#000080' },
            { name: 'Terracotta', hex: '#E2725B' },
            { name: 'Olive', hex: '#808000' },
            { name: 'Sky Blue', hex: '#87CEEB' }
        ],
        denim: [
            { name: 'Classic Blue', hex: '#1E3A5F' },
            { name: 'Dark Indigo', hex: '#0F1B33' },
            { name: 'Medium Wash', hex: '#4A6FA5' },
            { name: 'Light Wash', hex: '#7BA0DB' },
            { name: 'Black', hex: '#1C1C1C' },
            { name: 'Grey', hex: '#6B7280' },
            { name: 'White', hex: '#FFFFFF' },
            { name: 'Acid Wash', hex: '#9CA3AF' }
        ]
    };
    
    // Get colors for the product's category, fallback to cotton
    const colors = colorPalettes[product.category] || colorPalettes.cotton;
    
    // Create color option elements
    colors.forEach(color => {
        const colorOption = document.createElement('div');
        colorOption.className = 'color-option';
        colorOption.setAttribute('data-color', color.name.toLowerCase());
        colorOption.setAttribute('title', color.name);
        colorOption.style.backgroundColor = color.hex;
        
        // Add checkered pattern for white/light colors to show transparency
        if (color.name === 'White' || color.name === 'Ivory' || color.name === 'Cream') {
            colorOption.style.backgroundImage = `
                linear-gradient(45deg, #ccc 25%, transparent 25%),
                linear-gradient(-45deg, #ccc 25%, transparent 25%),
                linear-gradient(45deg, transparent 75%, #ccc 75%),
                linear-gradient(-45deg, transparent 75%, #ccc 75%)
            `;
            colorOption.style.backgroundSize = '10px 10px';
            colorOption.style.backgroundPosition = '0 0, 0 5px, 5px -5px, -5px 0px';
        }
        
        colorOption.addEventListener('click', () => {
            // Remove selected class from all options
            document.querySelectorAll('.color-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // Add selected class to clicked option
            colorOption.classList.add('selected');
            
            // Update hidden input
            selectedColorInput.value = color.name;
            
            // Update or create color name display
            let colorNameDisplay = colorPickerContainer.querySelector('.color-name-display');
            if (!colorNameDisplay) {
                colorNameDisplay = document.createElement('p');
                colorNameDisplay.className = 'color-name-display';
                colorPickerContainer.appendChild(colorNameDisplay);
            }
            colorNameDisplay.textContent = `Selected: ${color.name}`;
            
            // Update hint text
            const hint = colorPickerContainer.querySelector('.color-hint');
            if (hint) {
                hint.style.display = 'none';
            }
        });
        
        colorOptions.appendChild(colorOption);
    });
}

// Update total amount
function updateTotal() {
    const yards = parseInt(yardsInput.value) || 1;
    const total = product.price * yards;
    quantityDisplay.textContent = `${yards} yard${yards > 1 ? 's' : ''}`;
    totalAmountEl.textContent = formatPrice(total);
}

// Quantity selector buttons
document.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const action = btn.dataset.action;
        let value = parseInt(yardsInput.value) || 1;
        
        if (action === 'increment') {
            value = Math.min(value + 1, 1000);
        } else if (action === 'decrement') {
            value = Math.max(value - 1, 1);
        }
        
        yardsInput.value = value;
        updateTotal();
    });
});

// Update total when yards input changes
yardsInput.addEventListener('input', updateTotal);
yardsInput.addEventListener('change', updateTotal);

// Handle form submission
orderForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const selectedColor = document.getElementById('selectedColor').value;
    
    // Validate color selection
    if (!selectedColor) {
        alert('Please select a color for your fabric');
        return;
    }

    const formData = {
        productId: product.id,
        productName: product.name,
        productCategory: product.category,
        pricePerYard: product.price,
        fullName: document.getElementById('fullName').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        yards: parseInt(yardsInput.value),
        selectedColor: selectedColor,
        totalAmount: product.price * parseInt(yardsInput.value),
        message: document.getElementById('message').value.trim(),
        address: document.getElementById('address').value.trim(),
        action: 'order_placed'
    };
    
    // Validate form
    if (!formData.fullName || !formData.email || !formData.phone || formData.yards < 1) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Show loading
    loadingOverlay.classList.add('active');
    
    try {
        // Send order to backend API
        const response = await fetch('/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        const result = await response.json();
        
        if (!response.ok) {
            throw new Error(result.message || 'Failed to submit order');
        }
        
        // Store customer info in localStorage for tracking
        const customerHistory = JSON.parse(localStorage.getItem('customerHistory') || '[]');
        customerHistory.push({
            ...formData,
            timestamp: new Date().toISOString(),
            orderId: result.orderId
        });
        localStorage.setItem('customerHistory', JSON.stringify(customerHistory));
        
        // Hide loading and show success
        loadingOverlay.classList.remove('active');
        successModal.classList.add('active');
        
    } catch (error) {
        console.error('Order submission error:', error);
        loadingOverlay.classList.remove('active');
        
        // Fallback: open WhatsApp with order details if API fails
        const whatsappMessage = `*New Order*%0A%0AProduct: ${formData.productName}%0ACategory: ${formData.productCategory}%0AColor: ${formData.selectedColor}%0APrice per yard: ${formatPrice(formData.pricePerYard)}%0AYards: ${formData.yards}%0ATotal: ${formatPrice(formData.totalAmount)}%0A%0A*Customer Details*%0AName: ${formData.fullName}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0A%0AMessage: ${formData.message || 'None'}%0AAddress: ${formData.address || 'Not provided'}`;
        const whatsappUrl = `https://wa.me/2348034785371?text=${whatsappMessage}`;
        window.open(whatsappUrl, '_blank');
        
        // Still show success modal
        successModal.classList.add('active');
    }
});

// Close modal function
function closeModal() {
    successModal.classList.remove('active');
    orderForm.reset();
    yardsInput.value = 1;
    
    // Reset color picker
    document.querySelectorAll('.color-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    document.getElementById('selectedColor').value = '';
    const colorNameDisplay = document.querySelector('.color-name-display');
    if (colorNameDisplay) {
        colorNameDisplay.remove();
    }
    const hint = document.querySelector('.color-hint');
    if (hint) {
        hint.style.display = 'block';
    }
    
    updateTotal();
}

// Go back to main page
function goBack() {
    window.location.href = 'index.html#featured';
}

// Initialize page
populateProductDetails();

