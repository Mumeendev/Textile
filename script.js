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
        image: "https://media.istockphoto.com/id/2233640272/photo/black-fabric-texture-elegant-draped-cloth-background-in-dark-tones.webp?a=1&b=1&s=612x612&w=0&k=20&c=TCQ9q8hz6eBgyz-JKKYPvthii8dOa1daQlZgnfVdPaQ="
    },
    {
        id: 2,
        name: "Egyptian Cotton White",
        category: "cotton",
        price: 5000,
        description: "Luxurious Egyptian cotton with superior softness and durability",
        badge: "Premium",
        image: "https://media.istockphoto.com/id/2228880114/photo/fabric-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=jU2Wj-b-s2m21ww2-WX81dX27pQLKtdmkHdnHsCrMoI="
    },
    {
        id: 3,
        name: "Cotton Blend Striped",
        category: "cotton",
        price: 2800,
        description: "Versatile cotton blend with modern striped pattern",
        badge: "",
        image: "https://plus.unsplash.com/premium_photo-1746025617610-48a9e0f2cc4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGljdHVyZSUyMG9mJTIwY290dG9uJTIwYmxlbmQlMjBzdHJpcGV8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 4,
        name: "Organic Cotton Plain",
        category: "cotton",
        price: 4200,
        description: "100% organic cotton, eco-friendly and comfortable",
        badge: "New",
        image: "https://images.unsplash.com/photo-1639690222869-1e608aa51f82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGljdHVyZSUyMG9mJTIwb3JnYW5pYyUyMGNvdHRvbiUyMHBsYWlufGVufDB8fDB8fHww"
    },
    {
        id: 25,
        name: "Cotton Voile Pastel",
        category: "cotton",
        price: 3200,
        description: "Lightweight cotton voile with soft pastel shades, ideal for summer dresses",
        badge: "",
        image: "https://images.unsplash.com/photo-1582888302806-858021b4f67b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 26,
        name: "Cotton Canvas Heavy",
        category: "cotton",
        price: 4800,
        description: "Durable heavy cotton canvas perfect for bags and upholstery",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1629301203564-850c7d40f46e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBpY3R1cmUlMjBvZiUyMGNvdHRvbiUyMGNhbnZhcyUyMGhlYXZ5fGVufDB8fDB8fHww"
    },
    {
        id: 27,
        name: "Cotton Poplin Check",
        category: "cotton",
        price: 3600,
        description: "Crisp cotton poplin with classic checkered pattern",
        badge: "",
        image: "https://plus.unsplash.com/premium_photo-1733342567721-8c9d5b428b1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGljdHVyZSUyMG9mJTIwY290dG9uJTIwcG9wbGluayUyMGNoZWNrfGVufDB8fDB8fHww"
    },
    {
        id: 28,
        name: "Cotton Jersey Knit",
        category: "cotton",
        price: 3900,
        description: "Soft stretchy cotton jersey, perfect for t-shirts and casual wear",
        badge: "Best Seller",
        image: "https://images.unsplash.com/photo-1602706294170-1fed8eecd9f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGljdHVyZSUyMG9mJTIwY290dG9uJTIwamVyc2V5JTIwa25pdHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 49,
        name: "Cotton Seersucker Blue",
        category: "cotton",
        price: 3800,
        description: "Puckered seersucker cotton with textured finish, great for warm weather",
        badge: "",
        image: "https://media.istockphoto.com/id/2237957090/photo/blue-linen-background-close-up-textile.webp?a=1&b=1&s=612x612&w=0&k=20&c=I6L9bS6t5bo8igmiO0gi1Nm2AavVRMgWCQ-B_bbpszc="
    },
    {
        id: 50,
        name: "Cotton Twill Khaki",
        category: "cotton",
        price: 4100,
        description: "Durable twill weave cotton with diagonal rib pattern",
        badge: "Popular",
        image: "https://plus.unsplash.com/premium_photo-1744406927803-ee5139d464ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGljdHVyZSUyMG9mJTIwY290dG9uJTIwdHdpbGwlMjBraGFraXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 51,
        name: "Cotton Chambray Light",
        category: "cotton",
        price: 3700,
        description: "Lightweight chambray with soft hand feel and subtle texture",
        badge: "New",
        image: "https://media.istockphoto.com/id/979437136/photo/cotton-fabric-is-blue-brown-double-costume.webp?a=1&b=1&s=612x612&w=0&k=20&c=QF-PuH3O7toY0Gua1XvO2JoJkBj47smcKoZRzWVJjPg="
    },
    {
        id: 52,
        name: "Cotton Flannel Plaid",
        category: "cotton",
        price: 4500,
        description: "Brushed cotton flannel with warm plaid pattern, perfect for cooler days",
        badge: "New",
        image: "https://images.unsplash.com/photo-1612863233759-9e788611b406?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGljdHVyZSUyMG9mJTIwY290dG9uJTIwZmxhbm5lbCUyMHBsYWlkfGVufDB8fDB8fHww"
    },
    {
        id: 53,
        name: "Cotton Muslin Natural",
        category: "cotton",
        price: 2500,
        description: "Ultra-soft muslin with gauzy texture, ideal for baby clothes and linens",
        badge: "",
        image: "https://images.unsplash.com/photo-1693985007521-e08e64770947?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 54,
        name: "Cotton Oxford Solid",
        category: "cotton",
        price: 4000,
        description: "Classic oxford weave with button-down shirt perfection",
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1630920501459-f3e99320c4a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGljdHVyZSUyMGNvdHRvbiUyMG94Zm9yZCUyMHNvbGlkfGVufDB8fDB8fHww"
    },
    {
        id: 55,
        name: "Cotton Batiste White",
        category: "cotton",
        price: 3300,
        description: "Sheer lightweight batiste with delicate drape and softness",
        badge: "",
        image: "https://media.istockphoto.com/id/1331973533/photo/blank-white-crumpled-fabric-material-mockup-side-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=VtY0IO59Uxpe9owcuiX3BkaiNNxdmLBnPx_BlNBOHPw="
    },
    {
        id: 56,
        name: "Cotton Corduroy Tan",
        category: "cotton",
        price: 5200,
        description: "Textured corduroy with raised wale ridges, vintage appeal",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1644483497492-be5af9737127?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBpY3R1cmUlMjBjb3R0b24lMjBjdXJkb3JveSUyMHRhbnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 97,
        name: "Cotton Lawn Floral",
        category: "cotton",
        price: 3400,
        description: "Ultra-fine cotton lawn with delicate floral print, perfect for blouses",
        badge: "New",
        image: "https://plus.unsplash.com/premium_photo-1747054587445-8e197de291d0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 98,
        name: "Cotton Sateen Ivory",
        category: "cotton",
        price: 4300,
        description: "Smooth cotton sateen with subtle sheen, ideal for dress shirts",
        badge: "",
        image: "https://images.unsplash.com/photo-1603596179351-1b44c727bb76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGljdHVyZSUyMGNvdHRvbiUyMHNhdGVlbiUyMGl2b3J5fGVufDB8fDB8fHww"
    },
    {
        id: 99,
        name: "Cotton Duck Canvas",
        category: "cotton",
        price: 5600,
        description: "Heavy-duty duck canvas for bags, shoes, and home decor projects",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1629301203564-850c7d40f46e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBpY3R1cmUlMjBjb3R0b24lMjBkdWNrJTIwY2FudmFzfGVufDB8fDB8fHww"
    },
    {
        id: 100,
        name: "Cotton Gauze Double",
        category: "cotton",
        price: 3800,
        description: "Double-layer cotton gauze with soft crinkle, great for baby items",
        badge: "",
        image: "https://media.istockphoto.com/id/2205610959/photo/colorful-double-gauze-fabric-rolls-showing-texture-and-colors.webp?a=1&b=1&s=612x612&w=0&k=20&c=D-XTTrcKhZW15tqxiYDx2QjBiWeiLobshl0DbhozNxo="
    },
    {
        id: 101,
        name: "Cotton Quilting Patch",
        category: "cotton",
        price: 2900,
        description: "Premium quilting cotton with vibrant patchwork-ready patterns",
        badge: "Best Seller",
        image: "https://images.unsplash.com/photo-1610768400574-a588f7e1a7b7?q=80&w=570&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 102,
        name: "Cotton Broadcloth White",
        category: "cotton",
        price: 3100,
        description: "Fine broadcloth with tight weave, perfect for formal shirts",
        badge: "",
        image: "https://plus.unsplash.com/premium_photo-1700844300903-a27853b487f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBpY3R1cmUlMjBjb3R0b24lMjBicm9hZCUyMGNvYXQlMjB3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 103,
        name: "Cotton Pique Polo",
        category: "cotton",
        price: 4400,
        description: "Textured pique weave ideal for polo shirts and sportswear",
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1715268709799-feced3256d0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBpY3R1cmUlMjBjb3R0b24lMjBwaXF1ZSUyMHBvbG98ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 104,
        name: "Cotton Terry Cloth",
        category: "cotton",
        price: 3600,
        description: "Absorbent terry cloth perfect for towels and bathrobes",
        badge: "",
        image: "https://images.unsplash.com/photo-1559588168-0df3fa08d4f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGljdHVyZSUyMGNvdHRvbiUyMHRlcnJ5JTIwY2xvdGh8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 105,
        name: "Cotton Eyelet Embroidery",
        category: "cotton",
        price: 4700,
        description: "Delicate eyelet embroidery cotton with romantic lace-like details",
        badge: "New",
        image: "https://plus.unsplash.com/premium_photo-1768304683869-b9dd5d39ecb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGljdHVyZSUyMGNvdHRvbiUyMGV5ZWxldCUyMGVtYnJpb2Rlcnl8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 106,
        name: "Cotton Denim Light",
        category: "cotton",
        price: 4000,
        description: "Lightweight cotton denim with soft hand, perfect for shirts",
        badge: "",
        image: "https://plus.unsplash.com/premium_photo-1674747087104-516a4d6d316c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 107,
        name: "Cotton Velveteen Plum",
        category: "cotton",
        price: 5800,
        description: "Soft velveteen with plush pile, luxurious feel for special garments",
        badge: "Luxury",
        image: "https://media.istockphoto.com/id/1447175507/photo/yellow-plush-fabric-drapery-detail.jpg?s=1024x1024&w=is&k=20&c=Sgj8T_WCbHgfA7qL2KEqI7lIwE1A20E4BorJge86mWE="
    },
    {
        id: 108,
        name: "Cotton Madras Plaid",
        category: "cotton",
        price: 4200,
        description: "Classic madras plaid with handwoven character and vibrant colors",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1634640234915-b0f41a1eaaa3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y290dG9uJTIwbWFkcmFzJTIwcGxhaWR8ZW58MHx8MHx8fDA%3D"
    },

    // Silk & Satin
    {
        id: 5,
        name: "Pure Silk Fabric",
        category: "silk",
        price: 12000,
        description: "Luxurious pure silk for elegant dresses and traditional attire",
        badge: "Luxury",
        image: "https://images.unsplash.com/photo-1594734415578-00fc9540929b?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 6,
        name: "Satin Glossy Red",
        category: "silk",
        price: 8500,
        description: "High-quality satin with beautiful glossy finish",
        badge: "",
        image: "https://plus.unsplash.com/premium_photo-1674747086992-6a4d2319d965?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2F0aW4lMjBnbG9zc3klMjByZWR8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 7,
        name: "Silk Charmeuse Blue",
        category: "silk",
        price: 15000,
        description: "Premium silk charmeuse with smooth drape and shine",
        badge: "Premium",
        image: "https://media.istockphoto.com/id/2247089510/photo/velvet-luxury-fabric-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=06ZKeE2cpvuET7K5l7rjPWheAX33Kil5Lp6SoSPoZyw="
    },
    {
        id: 8,
        name: "Bridal Satin White",
        category: "silk",
        price: 10000,
        description: "Perfect bridal fabric with elegant sheen",
        badge: "Best Seller",
        image: "https://images.unsplash.com/photo-1756361771567-e276865b77cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJyaWRhbCUyMHNhdGluJTIwd2hpdGV8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 29,
        name: "Silk Organza Sheer",
        category: "silk",
        price: 13500,
        description: "Delicate sheer silk organza with crisp hand, perfect for overlays",
        badge: "New",
        image: "https://images.unsplash.com/photo-1582592641306-277abdcdbb7a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 30,
        name: "Duchess Satin Ivory",
        category: "silk",
        price: 11000,
        description: "Heavy duchess satin with structured drape for formal wear",
        badge: "Luxury",
        image: "https://plus.unsplash.com/premium_photo-1672680442261-ce8ba0e2fc2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVjaGVzcyUyMHNhdGluJTIwaXZvcnl8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 31,
        name: "Silk Crepe de Chine",
        category: "silk",
        price: 14000,
        description: "Lightweight silk crepe with matte finish and beautiful drape",
        badge: "",
        image: "https://media.istockphoto.com/id/1044986356/photo/fabric-crepe-de-chine-of-beige-pink-color-from-silk.jpg?s=2048x2048&w=is&k=20&c=JyR1XMajGl-4j3oUQWD-hpCkVwOu4fPDTP2t-MVPBRM="
    },
    {
        id: 32,
        name: "Satin Back Crepe",
        category: "silk",
        price: 9500,
        description: "Double-faced fabric with satin on one side and crepe on the other",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1606603050383-42d5c4e72031?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2F0aW4lMjBiYWNrJTIwY3JlcGV8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 57,
        name: "Silk Habotai Lining",
        category: "silk",
        price: 8000,
        description: "Lightweight habotai silk, perfect for linings and scarves",
        badge: "",
        image: "https://images.unsplash.com/photo-1606603050916-da262417eee5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNpbGslMjBoYWJvdGFpJTIwbGluaW5nfGVufDB8fDB8fHww"
    },
    {
        id: 58,
        name: "Silk Dupioni Champagne",
        category: "silk",
        price: 16000,
        description: "Textured dupioni with irregular slubs, luxurious champagne tone",
        badge: "Premium",
        image: "https://media.istockphoto.com/id/1070899542/photo/texture-background-pattern-silk-dupioni-fabric-by-the-yard-in-a-golden-beige-color.webp?a=1&b=1&s=612x612&w=0&k=20&c=JP6xz6IlF3dk_B6jY0rgFh2rzfk2gxDn3czFX3uY9kM="
    },
    {
        id: 59,
        name: "Silk Noil Raw",
        category: "silk",
        price: 10500,
        description: "Matte finish noil silk with subtle texture and natural feel",
        badge: "",
        image: "https://plus.unsplash.com/premium_photo-1674747087104-516a4d6d316c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2lsayUyMG5vaWwlMjByYXd8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 60,
        name: "Silk Peau de Soie",
        category: "silk",
        price: 14500,
        description: "Heavy silk with fine cross-rib texture, elegant drape",
        badge: "Luxury",
        image: "https://media.istockphoto.com/id/1800284183/photo/white-silk-texture-draped-fabric-luxury-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=oRTajglkfZ5At9Olf47uQCPv9cKPHsnZNgBl--5UQlM="
    },
    {
        id: 61,
        name: "Silk Georgette Black",
        category: "silk",
        price: 12500,
        description: "Sheer georgette with crepe texture, perfect for flowing garments",
        badge: "New",
        image: "https://media.istockphoto.com/id/1448357564/photo/black-textured-crinkled-background-black-wrinkled-fabric-with-lace-inserts.webp?a=1&b=1&s=612x612&w=0&k=20&c=G-oZwkr6yZ7qpImu6UuIEd3J_cSyf2eqnRuS3elQFoE="
    },
    {
        id: 62,
        name: "Silk Taffeta Emerald",
        category: "silk",
        price: 17000,
        description: "Crisp taffeta with rustling hand and vibrant emerald color",
        badge: "Premium",
        image: "https://media.istockphoto.com/id/159406176/photo/green-silk%E3%80%80close-up.webp?a=1&b=1&s=612x612&w=0&k=20&c=e1vAoRmOi576Oiql1Z7H2TJ3MeHm9iMf5uwLb-EqMck="
    },
    {
        id: 63,
        name: "Silk Velvet Plum",
        category: "silk",
        price: 18000,
        description: "Plush silk velvet with rich pile and sumptuous texture",
        badge: "Luxury",
        image: "https://plus.unsplash.com/premium_photo-1739557422481-590ef82c9a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2lsayUyMHZlbHZldCUyMHBsdW18ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 64,
        name: "Silk Chiffon Blush",
        category: "silk",
        price: 11500,
        description: "Ultra-sheer chiffon with ethereal drape and soft blush tone",
        badge: "Best Seller",
        image: "https://plus.unsplash.com/premium_photo-1669837813269-82b5b9f48857?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2lsayUyMGNoaWZmb24lMjBibHVzaHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 109,
        name: "Silk Brocade Gold",
        category: "silk",
        price: 19000,
        description: "Rich brocade silk with raised gold patterns, perfect for formal wear",
        badge: "Luxury",
        image: "https://plus.unsplash.com/premium_photo-1672940950617-ca7c8afb2ce5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2lsayUyMGJyb2NhZGUlMjBnb2xkfGVufDB8fDB8fHww"
    },
    {
        id: 110,
        name: "Silk Mikado Ivory",
        category: "silk",
        price: 16500,
        description: "Heavy mikado silk with structured drape, ideal for bridal gowns",
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1602185335134-2d072c07703c?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 111,
        name: "Silk Shantung Rose",
        category: "silk",
        price: 13000,
        description: "Textured shantung with beautiful slubs, elegant rose pink shade",
        badge: "",
        image: "https://plus.unsplash.com/premium_photo-1674748732485-3442361b54ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2lsayUyMHNoYW50dW5nJTIwcm9zZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 112,
        name: "Silk Habutai Paint",
        category: "silk",
        price: 9000,
        description: "Smooth habutai silk, perfect base for hand-painted designs",
        badge: "New",
        image: "https://images.unsplash.com/photo-1762106515983-6916d1308bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2lsayUyMGhhYnV0YWklMjBwYWludHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 113,
        name: "Silk Crepe Back Satin",
        category: "silk",
        price: 14000,
        description: "Reversible fabric with crepe texture on one side and satin shine on the other",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1705674337411-3b89e5afcc11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2lsayUyMGNyZXBlJTIwYmxhY2slMjBzYXRpbnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 114,
        name: "Silk Faille Black",
        category: "silk",
        price: 15500,
        description: "Ribbed faille silk with subtle cross-rib texture, elegant black",
        badge: "",
        image: "https://media.istockphoto.com/id/992864766/photo/unique-design-abstract-digital-pixel-noise-glitch-error-video-damage.webp?a=1&b=1&s=612x612&w=0&k=20&c=-n4HMs6h277UFfARoihxojD170U0o27wywBU96vT2OI="
    },
    {
        id: 115,
        name: "Silk Gazar Coral",
        category: "silk",
        price: 17500,
        description: "Crisp gazar silk that holds shapes beautifully, vibrant coral tone",
        badge: "Luxury",
        image: "https://media.istockphoto.com/id/1313627127/photo/pink-silk-fabric-texture-top-view-red-coral-glossy-satin-background-fashion-color-feminine.webp?a=1&b=1&s=612x612&w=0&k=20&c=748aiIOZAmIrJngnvoo09OLwtIcOTKy2rH06zZgQ72Q="
    },
    {
        id: 116,
        name: "Silk Mousseline Mint",
        category: "silk",
        price: 12000,
        description: "Sheer mousseline silk with lightweight airy feel, soft mint green",
        badge: "New",
        image: "https://images.unsplash.com/photo-1620763049765-27475b5ff3fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2lsayUyMG1vdXNzZWxpbmUlMjBtaW50fGVufDB8fDB8fHww"
    },
    {
        id: 117,
        name: "Silk Pongee Natural",
        category: "silk",
        price: 10500,
        description: "Lightweight pongee with natural texture, perfect for linings",
        badge: "",
        image: "https://media.istockphoto.com/id/997086420/photo/tissue-textile-fabric-material-texture.webp?a=1&b=1&s=612x612&w=0&k=20&c=DYjaRl8pa4eH38dmDl60qWRinvghLHJowKJw_wB8wNs="
    },
    {
        id: 118,
        name: "Silk Radzmoire Navy",
        category: "silk",
        price: 18500,
        description: "Watered silk with moire effect, deep navy with subtle patterns",
        badge: "Premium",
        image: "https://media.istockphoto.com/id/2255341296/photo/luxury-dark-blue-fabric-background-3d-render.webp?a=1&b=1&s=612x612&w=0&k=20&c=AcRR5UREjx05K2X0HuIhGFo_rtjiGAt42pgM5utjCUM="
    },
    {
        id: 119,
        name: "Silk Wash Purple",
        category: "silk",
        price: 11000,
        description: "Washable silk with casual elegance, rich purple shade",
        badge: "Popular",
        image: "https://plus.unsplash.com/premium_photo-1674674741071-1e28e023ccc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2lsayUyMHdhc2glMjBwdXJwbGV8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 120,
        name: "Silk Jacquard Teal",
        category: "silk",
        price: 16000,
        description: "Intricately woven jacquard silk with ornate teal patterns",
        badge: "Luxury",
        image: "https://plus.unsplash.com/premium_photo-1672681446484-827767f95dab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2lsayUyMGphY3F1YXJkJTIwdGVhbHxlbnwwfHwwfHx8MA%3D%3D"
    },

    // Ankara & African Prints
    {
        id: 9,
        name: "Ankara Wax Print",
        category: "ankara",
        price: 4500,
        description: "Vibrant African wax print with traditional patterns",
        badge: "Popular",
        image: "https://media.istockphoto.com/id/1243522123/photo/toghu-material.jpg?s=1024x1024&w=is&k=20&c=ZOuM2_u4dFSKw0nWOI7izLh7gJfUPhoWw9qgyG70zC0="
    },
    {
        id: 10,
        name: "Dutch Wax Ankara",
        category: "ankara",
        price: 6500,
        description: "High-quality Dutch wax print with bold colors",
        badge: "Premium",
        image: "https://media.istockphoto.com/id/2214934603/photo/small-business-owner-of-an-african-print-ankara-fabric-shop-proudly-displaying-textiles-prints.webp?a=1&b=1&s=612x612&w=0&k=20&c=4AaiHtE9NXK8Uyr97lQWvzLVtN1tVCkX3vmmW0w6iBY="
    },
    {
        id: 11,
        name: "Ankara Geometric Print",
        category: "ankara",
        price: 3800,
        description: "Modern geometric patterns on premium cotton base",
        badge: "",
        image: "https://images.unsplash.com/photo-1614619838981-a5d41d4dda42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5rYXJhJTIwZ2VvbWV0cmljJTIwcHJpbnR8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 12,
        name: "Super Wax Ankara",
        category: "ankara",
        price: 5500,
        description: "Super wax quality with rich, vibrant colors",
        badge: "New",
        image: "https://images.unsplash.com/photo-1642872597460-278924cb13dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwZXIlMjB3YXglMjBhbmthcmElMjBmYWJyaWN8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 33,
        name: "Ankara Floral Burst",
        category: "ankara",
        price: 4200,
        description: "Bold floral patterns with vibrant color bursts on cotton base",
        badge: "",
        image: "https://images.unsplash.com/photo-1621155222854-50763377718e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QW5rYXJhJTIwZmxvcmFsJTIwYnVyc3QlMjBmYWJyaWN8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 34,
        name: "Ankara Kente Inspired",
        category: "ankara",
        price: 5800,
        description: "Kente-inspired patterns celebrating West African heritage",
        badge: "Best Seller",
        image: "https://media.istockphoto.com/id/2215169760/photo/business-woman-points-at-a-piece-of-african-print-ankara-fabric-in-her-textiles-shop.webp?a=1&b=1&s=612x612&w=0&k=20&c=0vwC6qUibE4rfm6h5X_UsIde7y1_ZYu-uSBH-25FkAo="
    },
    {
        id: 35,
        name: "Ankara Adire Style",
        category: "ankara",
        price: 4800,
        description: "Tie-dye inspired Adire patterns with modern twist",
        badge: "New",
        image: "https://images.unsplash.com/photo-1552710307-537199cd41c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QW5rYXJhJTIwYWRpcmUlMjBmZGVzaWduJTIwZmFicmljfGVufDB8fDB8fHww"
    },
    {
        id: 36,
        name: "Ankara Mash Print",
        category: "ankara",
        price: 3500,
        description: "Affordable mash print with colorful African motifs",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1768212566108-4ce4f329e4d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFmcmljYW4lMjBwcmludHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 65,
        name: "Ankara Batik Sunset",
        category: "ankara",
        price: 5200,
        description: "Hand-drawn batik with warm sunset tones and intricate details",
        badge: "",
        image: "https://images.unsplash.com/photo-1768212565424-efa3a3852b81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFmcmljYW4lMjBwcmludHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 66,
        name: "Ankara Dashiki Bold",
        category: "ankara",
        price: 4600,
        description: "Bold dashiki patterns with regal color combinations",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1664151100165-71ed5515adad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW5rYXJhJTIwZGFzaGlraSUyMGJvbGR8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 67,
        name: "Ankara Mud Cloth",
        category: "ankara",
        price: 5000,
        description: "Inspired by traditional Bogolan mud cloth of Mali",
        badge: "New",
        image: "https://images.unsplash.com/photo-1652355004543-4618a1c79791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5rYXJhJTIwbXVkJTIwY2xvdGh8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 68,
        name: "Ankara Cowrie Shell",
        category: "ankara",
        price: 6200,
        description: "Ankara print featuring cowrie shell motifs, symbol of wealth",
        badge: "Premium",
        image: "https://images.unsplash.com/photo-1765685537256-1ea4be3f3e00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QW5rYXJhJTIwY293cmllJTIwZGVzaWduJTIwZmFicmljfGVufDB8fDB8fHww"
    },
    {
        id: 69,
        name: "Ankara Ankara Royal",
        category: "ankara",
        price: 5500,
        description: "Royal blue and gold combination with majestic patterns",
        badge: "",
        image: "https://images.unsplash.com/photo-1726208206168-6673899aff25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QW5rYXJhJTIwcm95YWwlMjBmYWJyaWN8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 70,
        name: "Ankara Tribe Mark",
        category: "ankara",
        price: 4000,
        description: "Traditional tribal markings translated into modern print design",
        badge: "Best Seller",
        image: "https://images.unsplash.com/photo-1655682604476-96976c1917fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QW5rYXJhJTIwdHJpYmUlMjBmYWJyaWN8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 71,
        name: "Ankara Calabash",
        category: "ankara",
        price: 3800,
        description: "Calabash-inspired patterns with earthy tones and organic shapes",
        badge: "",
        image: "https://media.istockphoto.com/id/2214934348/photo/small-business-owner-of-an-african-print-ankara-fabric-shop-proudly-displaying-different.jpg?s=1024x1024&w=is&k=20&c=AFsNM15IA6fma4ihMSGF-6AhQtrLTM25U9gcWJbvQTY="
    },
    {
        id: 72,
        name: "Ankara Beadwork",
        category: "ankara",
        price: 4900,
        description: "Inspired by traditional African beadwork with vibrant colors",
        badge: "New",
        image: "https://media.istockphoto.com/id/1199016714/photo/beautiful-storage.webp?a=1&b=1&s=612x612&w=0&k=20&c=zdCTpWKpr2SgxE8QgQG5tUUXHSSRr9gSvNgnJ6bOV-M="
    },
    {
        id: 121,
        name: "Ankara Safari Sunset",
        category: "ankara",
        price: 4700,
        description: "Warm sunset tones with safari-inspired patterns, earthy feel",
        badge: "",
        image: "https://media.istockphoto.com/id/1199016714/photo/beautiful-storage.webp?a=1&b=1&s=612x612&w=0&k=20&c=zdCTpWKpr2SgxE8QgQG5tUUXHSSRr9gSvNgnJ6bOV-M="
    },
    {
        id: 122,
        name: "Ankara Palm Wine",
        category: "ankara",
        price: 4100,
        description: "Traditional palm wine tapping ceremony inspired motifs",
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1652355004543-4618a1c79791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5rYXJhJTIwbXVkJTIwY2xvdGh8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 123,
        name: "Ankara Market Day",
        category: "ankara",
        price: 3900,
        description: "Bustling market scene translated into colorful abstract patterns",
        badge: "",
        image: "https://media.istockphoto.com/id/2215169752/photo/small-business-owner-of-an-african-print-ankara-fabric-shop-proudly-displaying-textiles-prints.webp?a=1&b=1&s=612x612&w=0&k=20&c=WZLBebGwEw23OkRG0XgHeADfh6VCR5ukbbXQVDDAV2k="
    },
    {
        id: 124,
        name: "Ankara Royal Stool",
        category: "ankara",
        price: 5600,
        description: "Ashanti royal stool symbols woven into premium Ankara design",
        badge: "Premium",
        image: "https://media.istockphoto.com/id/2215169752/photo/small-business-owner-of-an-african-print-ankara-fabric-shop-proudly-displaying-textiles-prints.webp?a=1&b=1&s=612x612&w=0&k=20&c=WZLBebGwEw23OkRG0XgHeADfh6VCR5ukbbXQVDDAV2k="
    },
    {
        id: 125,
        name: "Ankara Drum Beat",
        category: "ankara",
        price: 4300,
        description: "Rhythmic drum patterns translated into bold Ankara prints",
        badge: "New",
        image: "https://media.istockphoto.com/id/958834384/photo/colored-cushions.jpg?s=612x612&w=0&k=20&c=CT1AW_rtgsn4MOhOvQVE9axfXteGoueQsh_NcBMvO"
    },
    {
        id: 126,
        name: "Ankara Harvest Gold",
        category: "ankara",
        price: 4500,
        description: "Golden harvest celebration with rich earth tones and geometric shapes",
        badge: "Best Seller",
        image: "https://media.istockphoto.com/id/1325042194/photo/rugs-and-carpets-outside.jpg?s=612x612&w=0&k=20&c=ioJ9cgOYV8i3eZ54PAa3V5Rob_5WIZJFZ314-IBdz_k="
    },
    {
        id: 127,
        name: "Ankara Village Life",
        category: "ankara",
        price: 3700,
        description: "Daily village scenes and communal life in vibrant storytelling",
        badge: "",
        image: "https://media.istockphoto.com/id/1330668801/photo/the-shop-that-exhibits-its-rugs-and-carpets.jpg?s=612x612&w=0&k=20&c=A1sQudVsY-sw2x5L2ilhKf2yQ7P7ncrsyWS4nY6RiU4="
    },
    {
        id: 128,
        name: "Ankara Spirit Mask",
        category: "ankara",
        price: 5100,
        description: "Traditional ceremonial mask patterns with spiritual significance",
        badge: "Luxury",
        image: "https://media.istockphoto.com/id/1325042194/photo/rugs-and-carpets-outside.jpg?s=612x612&w=0&k=20&c=ioJ9cgOYV8i3eZ54PAa3V5Rob_5WIZJFZ314-IBdz_k="
    },
    {
        id: 129,
        name: "Ankara River Flow",
        category: "ankara",
        price: 4000,
        description: "Flowing river patterns with cool blues and greens, calming design",
        badge: "New",
        image: "https://media.istockphoto.com/id/1330668801/photo/the-shop-that-exhibits-its-rugs-and-carpets.jpg?s=612x612&w=0&k=20&c=A1sQudVsY-sw2x5L2ilhKf2yQ7P7ncrsyWS4nY6RiU4="
    },
    {
        id: 130,
        name: "Ankara Fire Dance",
        category: "ankara",
        price: 4600,
        description: "Dynamic fire dance celebration with warm reds and oranges",
        badge: "Popular",
        image: "https://media.istockphoto.com/id/960455390/photo/kilim-carpet.webp?a=1&b=1&s=612x612&w=0&k=20&c=nUXL4HKxUxwSOmxHn-bc1kKIQNyucBv6zgrzP2q2KDk="
    },
    {
        id: 131,
        name: "Ankara Story Cloth",
        category: "ankara",
        price: 4800,
        description: "Traditional storytelling through symbols and proverbs in fabric",
        badge: "",
        image: "https://media.istockphoto.com/id/1243522123/photo/toghu-material.jpg?s=612x612&w=0&k=20&c=Nu4lwAXhaSdQT0ijh0yKlcLlG2CS05bYcJHgRiP6bQs="
    },
    {
        id: 132,
        name: "Ankara Chief Crown",
        category: "ankara",
        price: 5900,
        description: "Royal crown motifs with gold accents, premium chief collection",
        badge: "Premium",
        image: "https://media.istockphoto.com/id/960455390/photo/kilim-carpet.webp?a=1&b=1&s=612x612&w=0&k=20&c=nUXL4HKxUxwSOmxHn-bc1kKIQNyucBv6zgrzP2q2KDk="
    },

    // Lace Fabrics
    {
        id: 13,
        name: "Swiss Lace Gold",
        category: "lace",
        price: 18000,
        description: "https://media.istockphoto.com/id/2172055063/photo/beautiful-dark-green-viridian-vintage-color-trends-feather-texture-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=mljy4DL_QOVNWV6e20IBDOsQwVjTr_RmQ9aDQzcQV9k=",
        badge: "Luxury",
        image: ""
    },
    {
        id: 14,
        name: "French Lace White",
        category: "lace",
        price: 15000,
        description: "Elegant French lace perfect for special occasions",
        badge: "Premium",
        image: "https://media.istockphoto.com/id/1355988459/photo/wedding-lace-texture-for-background-floral-ornament-of-threads.webp?a=1&b=1&s=612x612&w=0&k=20&c=aMQAQTXKxOc-bxoAU18kJCzHHbrIm4Oq9mJmJfPby4k="
    },
    {
        id: 15,
        name: "Cord Lace Beige",
        category: "lace",
        price: 9500,
        description: "Beautiful cord lace with detailed patterns",
        badge: "",
        image: "https://images.unsplash.com/photo-1558568368-dc03d41f78df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29yZCUyMGxhY2UlMjBiaWVnZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 16,
        name: "Guipure Lace Cream",
        category: "lace",
        price: 13500,
        description: "High-quality guipure lace with floral motifs",
        badge: "Best Seller",
        image: "https://plus.unsplash.com/premium_photo-1769264601308-0f28aaf0a5b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3VpcHVyZSUyMGxhY2UlMjBjcmVhbXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 37,
        name: "Swiss Lace Emerald",
        category: "lace",
        price: 19500,
        description: "Premium Swiss lace with stunning emerald green embroidery",
        badge: "Luxury",
        image: "https://media.istockphoto.com/id/175419126/photo/high-resolution-gold-background-with-floral-pattern.webp?a=1&b=1&s=612x612&w=0&k=20&c=-BiKWLBOQe2yD0qSReKBGf9dJGIcPAv8Fl2pBBgFlzU="
    },
    {
        id: 38,
        name: "Venise Lace Navy",
        category: "lace",
        price: 16000,
        description: "Heavy Venise lace with bold raised patterns",
        badge: "Premium",
        image: "https://plus.unsplash.com/premium_photo-1677646867111-7fa2ee349f31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmVuaWNlJTIwbGFjZSUyMG5hdnklMjBmYWJyaWN8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 39,
        name: "Chantilly Lace Black",
        category: "lace",
        price: 14500,
        description: "Delicate Chantilly lace with fine floral net background",
        badge: "New",
        image:"https://cdn.pixabay.com/photo/2015/08/05/12/26/lace-876415_1280.jpg"
    },
    {
        id: 40,
        name: "Embroidered Tulle Lace",
        category: "lace",
        price: 11000,
        description: "Sheer tulle base with intricate embroidered detailing",
        badge: "",
        image: "https://media.istockphoto.com/id/497203313/photo/flower-lace-pattern.webp?a=1&b=1&s=612x612&w=0&k=20&c=FKNaqTv2CntDoeJegEnG52edOh5YhUubBmJqbJlxjjQ="
    },
    {
        id: 73,
        name: "Swiss Lace Royal Blue",
        category: "lace",
        price: 20000,
        description: "Premium Swiss lace with royal blue embroidery and stone details",
        badge: "Luxury",
        image: "data:image/jpeg;base64,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"
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
        image: "https://media.istockphoto.com/id/1455989280/photo/white-jeans-fabric-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=XyZ9mH8kN2vL4pQ6rT1wU3xY5zA7bC9dE0fG2hI4jK6="
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

// ===== Utility Functions =====

// Escape HTML to prevent XSS
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
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

// Open order page with product ID
function openOrderPage(productId) {
    window.open(`order.html?id=${productId}`, '_blank');
}

// DOM Elements
const productGrid = document.getElementById('productGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const categoryCards = document.querySelectorAll('.category-card');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const contactForm = document.getElementById('contactForm');
const scrollTopBtn = document.getElementById('scrollTop');
const header = document.querySelector('.header');

// Search Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchClose = document.getElementById('searchClose');
const searchContainer = document.getElementById('searchContainer');
const searchResultsDropdown = document.getElementById('searchResultsDropdown');
const searchResultsInfo = document.getElementById('searchResultsInfo');
const searchQueryText = document.getElementById('searchQueryText');
const clearSearchBtn = document.getElementById('clearSearchBtn');

let currentSearchQuery = '';

// Render products
function renderProducts(filter = 'all') {
    const filteredProducts = filter === 'all'
        ? products
        : products.filter(product => product.category === filter);

    productGrid.innerHTML = '';

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image" onclick="openOrderPage(${product.id})">
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.style.display='none'; this.parentElement.innerHTML='<i class=\\'fas fa-image\\' style=\\'font-size:4rem;color:var(--text-light);opacity:0.3\\'></i>';">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <div class="product-category">${getCategoryName(product.category)}</div>
                <h3 onclick="openOrderPage(${product.id})">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <div class="product-price">
                        ${formatPrice(product.price)}
                        <span>/yard</span>
                    </div>
                    <button class="btn-cart" onclick="openOrderPage(${product.id})">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Search functionality
function performSearch(query) {
    if (!query || query.trim().length === 0) {
        clearSearch();
        return;
    }

    currentSearchQuery = query.trim().toLowerCase();
    const searchTerms = currentSearchQuery.split(/\s+/);

    const searchResults = products.filter(product => {
        const searchableText = `${product.name} ${product.description} ${getCategoryName(product.category)}`.toLowerCase();
        return searchTerms.some(term => searchableText.includes(term));
    });

    renderSearchResults(searchResults, query.trim());
    showSearchResultsInfo(query.trim(), searchResults.length);
    showSearchClose();
}

function renderSearchResults(results, query) {
    if (!searchResultsDropdown) return;

    if (results.length === 0) {
        searchResultsDropdown.innerHTML = `
            <div class="search-no-results">
                <i class="fas fa-search"></i>
                <p>No fabrics found for "<strong>${escapeHtml(query)}</strong>"</p>
                <span>Try different keywords or browse our categories</span>
            </div>
        `;
        searchResultsDropdown.style.display = 'block';
        return;
    }

    searchResultsDropdown.innerHTML = results.slice(0, 8).map(product => `
        <div class="search-result-item" onclick="openOrderPage(${product.id}); closeSearchDropdown();">
            <div class="search-result-image">
                <img src="${product.image}" alt="${escapeHtml(product.name)}" loading="lazy" onerror="this.style.display='none'; this.parentElement.innerHTML='<i class=\\'fas fa-image\\' style=\\'font-size:1.5rem;color:var(--text-light);opacity:0.3\\'></i>';">
            </div>
            <div class="search-result-info">
                <h4>${highlightSearchTerm(escapeHtml(product.name), query)}</h4>
                <div class="search-result-category">${getCategoryName(product.category)}</div>
                <p>${highlightSearchTerm(escapeHtml(product.description), query)}</p>
                <div class="search-result-price">${formatPrice(product.price)}<span>/yard</span></div>
            </div>
        </div>
    `).join('');

    searchResultsDropdown.style.display = 'block';
}

function highlightSearchTerm(text, query) {
    if (!query) return text;
    const terms = query.trim().split(/\s+/).filter(t => t.length > 0);
    let result = text;
    terms.forEach(term => {
        const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        result = result.replace(regex, '<mark class="search-highlight">$1</mark>');
    });
    return result;
}

function showSearchResultsInfo(query, count) {
    if (!searchResultsInfo) return;
    searchResultsInfo.style.display = 'flex';
    searchQueryText.textContent = `"${query}"`;
}

function clearSearch() {
    currentSearchQuery = '';
    if (searchInput) searchInput.value = '';
    closeSearchDropdown();
    hideSearchResultsInfo();
    hideSearchClose();
    renderProducts();
}

function closeSearchDropdown() {
    if (searchResultsDropdown) {
        searchResultsDropdown.style.display = 'none';
    }
}

function hideSearchResultsInfo() {
    if (searchResultsInfo) {
        searchResultsInfo.style.display = 'none';
    }
}

function showSearchClose() {
    if (searchClose) searchClose.style.display = 'block';
    if (searchBtn) searchBtn.style.display = 'none';
}

function hideSearchClose() {
    if (searchClose) searchClose.style.display = 'none';
    if (searchBtn) searchBtn.style.display = 'block';
}

function renderSearchResultsToGrid(results, query) {
    productGrid.innerHTML = '';

    if (results.length === 0) {
        productGrid.innerHTML = `
            <div class="no-results-message">
                <i class="fas fa-search"></i>
                <h3>No fabrics found</h3>
                <p>We couldn't find any fabrics matching "<strong>${escapeHtml(query)}</strong>"</p>
                <button class="btn-primary" onclick="clearSearch()">
                    <i class="fas fa-times"></i> Clear Search
                </button>
            </div>
        `;
        return;
    }

    results.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image" onclick="openOrderPage(${product.id})">
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.style.display='none'; this.parentElement.innerHTML='<i class=\\'fas fa-image\\' style=\\'font-size:4rem;color:var(--text-light);opacity:0.3\\'></i>';">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <div class="product-category">${getCategoryName(product.category)}</div>
                <h3 onclick="openOrderPage(${product.id})">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <div class="product-price">
                        ${formatPrice(product.price)}
                        <span>/yard</span>
                    </div>
                    <button class="btn-cart" onclick="openOrderPage(${product.id})">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Search event handlers
let searchTimeout;

function executeSearch(query) {
    if (!query || !query.trim()) return;

    const trimmedQuery = query.trim();
    const searchTerms = trimmedQuery.toLowerCase().split(/\s+/).filter(t => t.length > 0);

    const searchResults = products.filter(product => {
        const searchableText = `${product.name} ${product.description} ${getCategoryName(product.category)}`.toLowerCase();
        return searchTerms.some(term => searchableText.includes(term));
    });

    // Update dropdown preview
    performSearch(trimmedQuery);

    // Update product grid with search results
    renderSearchResultsToGrid(searchResults, trimmedQuery);

    // Scroll to products section
    document.getElementById('featured').scrollIntoView({ behavior: 'smooth' });
}

if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value;
        if (query.trim()) {
            executeSearch(query);
            closeSearchDropdown();
            searchInput.blur();
        }
    });
}

if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const query = searchInput.value;
            if (query.trim()) {
                clearTimeout(searchTimeout);
                executeSearch(query);
                closeSearchDropdown();
                searchInput.blur();
            }
        }
    });

    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        const query = searchInput.value;

        if (query.trim().length === 0) {
            closeSearchDropdown();
            hideSearchClose();
            clearSearch();
            return;
        }

        // Show close button
        showSearchClose();

        // Debounce live search (show preview dropdown only)
        searchTimeout = setTimeout(() => {
            const searchTerms = query.trim().toLowerCase().split(/\s+/).filter(t => t.length > 0);
            const searchResults = products.filter(product => {
                const searchableText = `${product.name} ${product.description} ${getCategoryName(product.category)}`.toLowerCase();
                return searchTerms.some(term => searchableText.includes(term));
            });
            renderSearchResults(searchResults, query.trim());
        }, 300);
    });

    // Focus effect - show close button
    searchInput.addEventListener('focus', () => {
        if (searchInput.value.trim().length > 0) {
            showSearchClose();
        }
    });
}

if (searchClose) {
    searchClose.addEventListener('click', clearSearch);
}

if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', clearSearch);
}

// Close search dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (searchResultsDropdown && !searchContainer.contains(e.target)) {
        closeSearchDropdown();
    }
});

// Add to cart function
function addToCart(productName) {
    const message = `Hello! I'm interested in purchasing ${productName}. Please provide more details.`;
    const whatsappUrl = `https://wa.me/2348034785371?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Filter buttons event listeners
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        // Filter products
        const filter = btn.dataset.filter;
        renderProducts(filter);
    });
});

// Category cards event listeners
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        // Update active filter button
        filterBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === category) {
                btn.classList.add('active');
            }
        });
        // Render filtered products
        renderProducts(category);
        // Scroll to products section
        document.getElementById('featured').scrollIntoView({ behavior: 'smooth' });
    });
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Contact form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const phone = contactForm.querySelector('input[type="tel"]').value;
    const message = contactForm.querySelector('textarea').value;

    // Create WhatsApp message
    const whatsappMessage = `Hello! My name is ${name}.%0AEmail: ${email}%0APhone: ${phone}%0A%0A${message}`;
    const whatsappUrl = `https://wa.me/2349139247948?text=${whatsappMessage}`;

    // Open WhatsApp with pre-filled message
    window.open(whatsappUrl, '_blank');

    // Reset form
    contactForm.reset();

    alert('Thank you for your message! We will get back to you shortly.');
});

// Copy WhatsApp number function
function copyWhatsAppNumber() {
    const number = '09139247948';
    navigator.clipboard.writeText(number).then(() => {
        const btn = document.querySelector('.copy-number-btn');
        if (btn) {
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            btn.classList.add('copied');
            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.classList.remove('copied');
            }, 2000);
        }
    }).catch(err => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = number;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            const btn = document.querySelector('.copy-number-btn');
            if (btn) {
                const originalHTML = btn.innerHTML;
                btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                btn.classList.add('copied');
                setTimeout(() => {
                    btn.innerHTML = originalHTML;
                    btn.classList.remove('copied');
                }, 2000);
            }
        } catch (err2) {
            alert('Please copy the number manually: ' + number);
        }
        document.body.removeChild(textArea);
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize products on page load
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});

// Scroll to top button functionality
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    // Header scroll effect
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Show/hide scroll to top button
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.category-card, .product-card, .feature-item, .contact-item, .process-step');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = `opacity 0.5s ease ${index % 4 * 0.08}s, transform 0.5s ease ${index % 4 * 0.08}s`;
        observer.observe(el);
    });
});

// ===== Comments / Testimonials Functionality =====

const commentForm = document.getElementById('commentForm');
const commentsList = document.getElementById('commentsList');
const starRating = document.getElementById('starRating');
const ratingValue = document.getElementById('ratingValue');
const totalReviewsEl = document.getElementById('totalReviews');
const avgRatingEl = document.getElementById('avgRating');

// Star rating functionality
if (starRating) {
    const stars = starRating.querySelectorAll('i');
    
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = parseInt(star.dataset.rating);
            ratingValue.value = rating;
            
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.remove('far');
                    s.classList.add('fas');
                    s.classList.add('active');
                } else {
                    s.classList.remove('fas');
                    s.classList.remove('active');
                    s.classList.add('far');
                }
            });
        });
        
        star.addEventListener('mouseenter', () => {
            const rating = parseInt(star.dataset.rating);
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.style.color = 'var(--accent-color)';
                } else {
                    s.style.color = '';
                }
            });
        });
    });
    
    starRating.addEventListener('mouseleave', () => {
        stars.forEach((s, index) => {
            const currentRating = parseInt(ratingValue.value);
            if (index < currentRating) {
                s.style.color = 'var(--accent-color)';
            } else {
                s.style.color = '';
            }
        });
    });
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days} days ago`;
    if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
    
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

// Generate avatar initials
function getInitials(name) {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

// Render stars for a comment
function renderStars(rating) {
    if (!rating) return '';
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += `<i class="${i <= rating ? 'fas' : 'far'} ${i > rating ? 'empty' : ''} fa-star"></i>`;
    }
    return `<div class="comment-rating">${stars}</div>`;
}

// Render comments
function renderComments(comments) {
    if (!commentsList) return;
    
    if (comments.length === 0) {
        commentsList.innerHTML = `
            <div class="no-comments">
                <i class="far fa-comment-dots"></i>
                <p>No reviews yet. Be the first to share your experience!</p>
            </div>
        `;
        return;
    }
    
    commentsList.innerHTML = comments.map(comment => `
        <div class="comment-item">
            <div class="comment-header">
                <div class="comment-author">
                    <div class="comment-avatar">${getInitials(comment.full_name)}</div>
                    <div>
                        <div class="comment-name">${escapeHtml(comment.full_name)}</div>
                        <div class="comment-date">${formatDate(comment.created_at)}</div>
                    </div>
                </div>
                ${renderStars(comment.rating)}
            </div>
            <p class="comment-text">${escapeHtml(comment.comment)}</p>
        </div>
    `).join('');
}

// Load comments from API
async function loadComments() {
    if (!commentsList) return;
    
    try {
        const response = await fetch('/api/comments');
        const data = await response.json();
        
        if (data.success) {
            renderComments(data.comments);
        }
    } catch (error) {
        console.error('Load comments error:', error);
        // Fallback: show message that server is needed
        commentsList.innerHTML = `
            <div class="no-comments">
                <i class="fas fa-info-circle"></i>
                <p>Reviews will appear when the server is running.</p>
            </div>
        `;
    }
}

// Load comments count and average rating
async function loadCommentsStats() {
    try {
        const response = await fetch('/api/comments/count');
        const data = await response.json();
        
        if (data.success) {
            if (totalReviewsEl) totalReviewsEl.textContent = data.total;
            if (avgRatingEl) avgRatingEl.textContent = data.avgRating;
        }
    } catch (error) {
        console.error('Load stats error:', error);
    }
}

// Submit comment
if (commentForm) {
    commentForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const fullName = document.getElementById('commentName').value.trim();
        const email = document.getElementById('commentEmail').value.trim();
        const comment = document.getElementById('commentText').value.trim();
        const rating = parseInt(ratingValue.value);

        if (!fullName || !comment) {
            alert('Please fill in your name and review');
            return;
        }

        if (!rating || rating < 1) {
            alert('Please select a star rating');
            return;
        }

        const submitBtn = commentForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Posting...';
        submitBtn.disabled = true;

        console.log('Submitting comment:', { fullName, email, comment, rating });

        try {
            const response = await fetch('/api/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ fullName, email, comment, rating })
            });

            console.log('Response status:', response.status);
            const data = await response.json();
            console.log('Response data:', data);

            if (data.success) {
                // Clear form
                commentForm.reset();
                ratingValue.value = 0;
                if (starRating) {
                    starRating.querySelectorAll('i').forEach(s => {
                        s.classList.remove('fas', 'active');
                        s.classList.add('far');
                        s.style.color = '';
                    });
                }

                // Reload comments immediately
                console.log('Comment submitted successfully, reloading comments...');
                await loadComments();
                await loadCommentsStats();

                // Scroll to the comments list to show the new comment
                if (commentsList) {
                    commentsList.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }

                // Show success message
                alert('Thank you for your review! Your comment has been posted.');
            } else {
                alert(data.message || 'Failed to submit review');
            }
        } catch (error) {
            console.error('Submit comment error:', error);
            alert('Failed to submit review. Please make sure the server is running.');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Load comments on page load
document.addEventListener('DOMContentLoaded', () => {
    loadComments();
    loadCommentsStats();
});

