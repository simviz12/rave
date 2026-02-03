/* Menu Data */
const menuData = [
    {
        category: "Parrilla y Picadas",
        items: [
            { id: 101, name: "Picada Personal", price: 32000, desc: "Res, cerdo, pollo, chorizo, maduritos con queso, papas francesas, monedas de plátano, crispetas y salsas.", img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80" },
            { id: 102, name: "Picada Doble (2 personas)", price: 45000, desc: "Para compartir: Res, cerdo, pollo, chorizo y abundantes acompañamientos.", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=80" },
            { id: 103, name: "Picada Familiar (6 personas)", price: 95000, desc: "La opción gigante para compartir en familia.", img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80" },
            { id: 104, name: "Parrilla de Res (300g)", price: 28000, desc: "Corte selecto de res a la parrilla.", img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=400&q=80" },
            { id: 105, name: "Parrilla de Cerdo (300g)", price: 28000, desc: "Lomo de cerdo jugoso a la parrilla.", img: "https://images.unsplash.com/photo-1624792695503-4f51f4c71c4c?auto=format&fit=crop&w=400&q=80" },
            { id: 106, name: "Parrilla Mixta", price: 32000, desc: "Combinación de Res, Cerdo y Pollo.", img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80" },
            { id: 107, name: "Filete Gratinado", price: 30000, desc: "Cerdo o pollo con jamón y queso fundido.", img: "https://images.unsplash.com/photo-1604908177453-7462950a6a3b?auto=format&fit=crop&w=400&q=80" },
            { id: 108, name: "Chuleta", price: 30000, desc: "Cerdo o pollo apanado crocante.", img: "https://images.unsplash.com/photo-1599955747492-f0464f275298?auto=format&fit=crop&w=400&q=80" }
        ]
    },
    {
        category: "Hamburguesas",
        items: [
            { id: 201, name: "Burguer Tradicional", price: 23000, desc: "Carne selecta, vegetales y papas francesas.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80" },
            { id: 202, name: "Burguer Poulet", price: 23000, desc: "Hamburguesa de pollo con papas francesas.", img: "https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?auto=format&fit=crop&w=400&q=80" },
            { id: 203, name: "Burguer Ranch", price: 24000, desc: "Estilo ranchero con ingredientes especiales.", img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=400&q=80" },
            { id: 204, name: "Burguer Mexicana", price: 24000, desc: "Con jalapeños picantes.", img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=400&q=80" },
            { id: 205, name: "Burguer Especial", price: 26000, desc: "Doble carne, ripio y maduritos.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80" },
            { id: 206, name: "Burguer De Todo", price: 28000, desc: "Res, costilla ahumada y chicharrón.", img: "https://images.unsplash.com/photo-1596649299486-3c2243eb3469?auto=format&fit=crop&w=400&q=80" }
        ]
    },
    {
        category: "Perros Calientes",
        items: [
            { id: 301, name: "Perro Tradicional", price: 18000, desc: "Sabor clásico con papas francesas.", img: "https://images.unsplash.com/photo-1619740455993-9e4123723d5a?auto=format&fit=crop&w=400&q=80" },
            { id: 302, name: "Perro Mixto", price: 22000, desc: "Combinación de carnes.", img: "https://images.unsplash.com/photo-1541095058489-413b78035183?auto=format&fit=crop&w=400&q=80" },
            { id: 303, name: "Perro Ranchero", price: 22000, desc: "Con ingredientes rancheros.", img: "https://images.unsplash.com/photo-1619740455993-9e4123723d5a?auto=format&fit=crop&w=400&q=80" }
        ]
    },
    {
        category: "Entradas y Para Picar",
        items: [
            { id: 401, name: "Tostón (Variedades)", price: 22000, desc: "Elige: Verde, Clásico, Mixto, Mexicano o con Hogao.", img: "https://images.unsplash.com/photo-1628294895950-98052523e036?auto=format&fit=crop&w=400&q=80" },
            { id: 402, name: "Alitas x 6", price: 24000, desc: "Sabores: Búfalo, Limón Pimienta, Maracuyá, BBQ, Miel Mostaza.", img: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=400&q=80" },
            { id: 403, name: "Alitas x 9", price: 32000, desc: "Sabores: Búfalo, Limón Pimienta, Maracuyá, BBQ, Miel Mostaza.", img: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=400&q=80" },
            { id: 404, name: "Megacombo Alitas (14 uds)", price: 47000, desc: "Ideal para grupos.", img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=400&q=80" },
            { id: 405, name: "Costillas Ahumadas (350g)", price: 24000, desc: "En salsa: BBQ, Búfalo, Miel, Maracuyá o Limón.", img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80" },
            { id: 406, name: "Sandwich de Pollo", price: 20000, desc: "Delicioso pollo desmechado.", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&q=80" },
            { id: 407, name: "Sandwich Mixto", price: 22000, desc: "Combinación de carnes.", img: "https://images.unsplash.com/photo-1553909489-cdb355cf7a57?auto=format&fit=crop&w=400&q=80" },
            { id: 408, name: "Sandwich Hawaiano", price: 21000, desc: "Con piña y jamón.", img: "https://images.unsplash.com/photo-1553909489-cdb355cf7a57?auto=format&fit=crop&w=400&q=80" },
            { id: 409, name: "Papas Creole", price: 15000, desc: "Papas criollas sazonadas.", img: "https://images.unsplash.com/photo-1573080496987-a2ff7d825c78?auto=format&fit=crop&w=400&q=80" },
            { id: 410, name: "Salchi Reve", price: 15000, desc: "Nuestra versión de la salchipapa.", img: "https://images.unsplash.com/photo-1582239634586-7a71029c391d?auto=format&fit=crop&w=400&q=80" },
            { id: 411, name: "Papas Gratinadas Reve", price: 25000, desc: "Con mucho queso y toppings.", img: "https://images.unsplash.com/photo-1600555379765-f819ed02e2bd?auto=format&fit=crop&w=400&q=80" }
        ]
    },
    {
        category: "Bebidas y Licores",
        items: [
            { id: 501, name: "Jugos en Agua", price: 6000, desc: "Fruta natural.", img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=400&q=80" },
            { id: 502, name: "Jugos en Leche", price: 7000, desc: "Cremosos y frutales.", img: "https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=400&q=80" },
            { id: 503, name: "Limonadas", price: 6000, desc: "Natural, Cerezada ($7k) o Coco ($7k).", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80" },
            { id: 504, name: "Mangonada", price: 7000, desc: "Granizado de mango con chamoy.", img: "https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&w=400&q=80" },
            { id: 505, name: "Hervidos de Frutas", price: 5000, desc: "Bebida caliente frutal.", img: "https://images.unsplash.com/photo-1582239634586-7a71029c391d?auto=format&fit=crop&w=400&q=80" },
            { id: 506, name: "Cerveza Nacional", price: 5000, desc: "Águila, Poker, etc.", img: "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=400&q=80" },
            { id: 507, name: "Club Colombia", price: 7000, desc: "Todas las variedades.", img: "https://images.unsplash.com/photo-1571658421863-7140498b8c53?auto=format&fit=crop&w=400&q=80" },
            { id: 508, name: "Corona", price: 9000, desc: "Cerveza importada.", img: "https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?auto=format&fit=crop&w=400&q=80" },
            { id: 509, name: "Micheladas", price: 7000, desc: "Tradicional ($7k) o con Fruta ($12k).", img: "https://images.unsplash.com/photo-1438557068880-c5f474830377?auto=format&fit=crop&w=400&q=80" },
            { id: 510, name: "Coctel de la Casa", price: 10000, desc: "Especialidad de la casa.", img: "https://images.unsplash.com/photo-1514362545857-3bc16549766b?auto=format&fit=crop&w=400&q=80" },
            { id: 511, name: "Vino de Verano/Caliente", price: 12000, desc: "Copa de vino preparada.", img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&q=80" }
        ]
    }
];

// App State
let cart = [];
const PHONE_NUMBER = "573007136884";

// DOM Elements
const menuContainer = document.getElementById('menuContainer');
const cartBtn = document.getElementById('cartBtn');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const cartItemsContainer = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const reservationForm = document.getElementById('reservationForm');
const navbar = document.getElementById('navbar');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    updateCartUI();

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const dateInput = document.getElementById('resDate');
    if (dateInput) {
        dateInput.min = new Date().toISOString().split("T")[0];
    }
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});

function renderMenu() {
    menuContainer.innerHTML = menuData.map(category => `
        <div class="menu-category-wrapper">
            <div class="category-header">
                <h3>${category.category}</h3>
                <div class="cat-line"></div>
            </div>
            <div class="menu-grid">
                ${category.items.map(item => `
                    <div class="menu-card">
                        <div class="card-image-container">
                            <img src="${item.img}" alt="${item.name}" class="card-img">
                        </div>
                        <div class="card-content">
                            <div class="card-header">
                                <h4 class="food-title">${item.name}</h4>
                            </div>
                            <p class="food-desc">${item.desc}</p>
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto;">
                                <span class="food-price">$${item.price.toLocaleString()}</span>
                                <button class="btn-add" onclick="addToCart(${item.id})" style="width: auto; padding: 10px 20px;">
                                    <i class="fas fa-plus"></i> <span style="font-size: 0.8rem;">AGREGAR</span>
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Cart Logic
window.addToCart = (id) => {
    let itemToAdd = null;
    for (const cat of menuData) {
        const found = cat.items.find(i => i.id === id);
        if (found) {
            itemToAdd = found;
            break;
        }
    }

    if (!itemToAdd) return;

    const existingItem = cart.find(i => i.id === id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...itemToAdd, quantity: 1 });
    }

    updateCartUI();
    openCart();
};

window.removeFromCart = (id) => {
    const existingItem = cart.find(i => i.id === id);
    if (existingItem) {
        existingItem.quantity--;
        if (existingItem.quantity <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
        updateCartUI();
    }
};

function updateCartUI() {
    cartCount.innerText = cart.reduce((acc, item) => acc + item.quantity, 0);
    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    cartTotal.innerText = '$' + total.toLocaleString();

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div style="text-align: center; color: #666; padding: 40px 0;">
                <i class="fas fa-shopping-basket" style="font-size: 3rem; margin-bottom: 20px; opacity: 0.3;"></i>
                <p>Tu pedido está vacío.</p>
                <p style="font-size: 0.8rem; margin-top: 10px;">¡Explora nuestro delicioso menú!</p>
            </div>`;
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div style="display: flex; gap: 15px; margin-bottom: 20px; border-bottom: 1px solid #222; padding-bottom: 15px;">
                 <img src="${item.img}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">
                 <div style="flex: 1;">
                    <h4 style="color: #eebb55; margin-bottom: 5px; font-size: 0.95rem;">${item.name}</h4>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="color: #aaa; font-size: 0.9rem;">$${item.price.toLocaleString()}</span>
                        <div style="background: #222; border-radius: 5px; display: flex; align-items: center;">
                            <button onclick="removeFromCart(${item.id})" style="padding: 5px 10px; background: none; border: none; color: #fff; cursor: pointer;">-</button>
                            <span style="font-size: 0.9rem; margin: 0 5px;">${item.quantity}</span>
                            <button onclick="addToCart(${item.id})" style="padding: 5px 10px; background: none; border: none; color: #fff; cursor: pointer;">+</button>
                        </div>
                    </div>
                 </div>
            </div>
        `).join('');
    }
}

// Sidebar Controls
function openCart() {
    cartSidebar.classList.add('active');
    sidebarOverlay.classList.add('active');
}

function closeCartPanel() {
    cartSidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
}

cartBtn.addEventListener('click', openCart);
closeCart.addEventListener('click', closeCartPanel);
sidebarOverlay.addEventListener('click', closeCartPanel);

// Order Checkout
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;
    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    let message = `*PEDIDO WEB REVE*\n--------------------------------\n`;
    cart.forEach(item => {
        message += `• ${item.quantity}x ${item.name}\n   $${(item.price * item.quantity).toLocaleString()}\n`;
    });
    message += `--------------------------------\n*TOTAL: $${total.toLocaleString()}*\n\nHola, deseo confirmar este pedido.`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
});

// Reservation
if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('resName').value;
        const date = document.getElementById('resDate').value;
        const time = document.getElementById('resTime').value;
        const people = document.getElementById('resPeople').value;
        const phone = document.getElementById('resPhone').value;

        let message = `*¡Hola! Deseo realizar una reserva en Reve Restaurante Bar 🥂✨*\n\n`;
        message += ` Detalles de la Reserva:\n`;
        message += ` Nombre: ${name}\n`;
        message += ` Fecha: ${date}\n`;
        message += ` Hora: ${time}\n`;
        message += ` Nº Personas: ${people}\n`;
        message += ` Contacto: ${phone}\n\n`;
        message += `--------------------------------\n`;
        message += `Quedo atento a su confirmación. ¡Muchas gracias!`;

        window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    });
}
