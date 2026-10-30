// Estado de la aplicación
let cart = [];
let currentCategory = 'todos';
let searchQuery = '';

// Elementos DOM
const categoriesContainer = document.getElementById('categoriesContainer');
const productsGrid = document.getElementById('productsGrid');
const sectionTitle = document.getElementById('sectionTitle');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

const cartToggleBtn = document.getElementById('cartToggleBtn');
const cartModal = document.getElementById('cartModal');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartCount = document.getElementById('cartCount');
const cartTotalPrice = document.getElementById('cartTotalPrice');
const whatsappCheckoutBtn = document.getElementById('whatsappCheckoutBtn');

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderProducts();
    setupEventListeners();
});

// Renderizar pestañas de categorías
function renderCategories() {
    categoriesContainer.innerHTML = '';
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `category-tab ${cat.id === currentCategory ? 'active' : ''}`;
        btn.textContent = cat.name;
        btn.addEventListener('click', () => {
            currentCategory = cat.id;
            searchQuery = '';
            searchInput.value = '';
            
            // Actualizar título de sección
            sectionTitle.textContent = cat.name;

            document.querySelectorAll('.category-tab').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProducts();

            // Cerrar menú hamburguesa en móvil al seleccionar
            categoriesContainer.classList.remove('open');
        });
        categoriesContainer.appendChild(btn);
    });
}

// Renderizar productos según categoría y búsqueda
function renderProducts() {
    productsGrid.innerHTML = '';

    let filtered = products.filter(p => {
        const matchesCategory = currentCategory === 'todos' || p.category === currentCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              p.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem 0;">No se encontraron productos.</p>`;
        return;
    }

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        const catObj = categories.find(c => c.id === product.category);
        const catName = catObj ? catObj.name : product.category;

        card.innerHTML = `
            <a href="product.html?id=${product.id}" style="text-decoration: none;">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            </a>
            <div class="product-info">
                <span class="product-category">${catName}</span>
                <a href="product.html?id=${product.id}" style="text-decoration: none; color: inherit;">
                    <h3 class="product-name">${product.name}</h3>
                </a>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toLocaleString('es-AR')}</span>
                    <button class="btn-add" onclick="addToCart(${product.id})">Agregar</button>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

// Configurar Event Listeners
function setupEventListeners() {
    searchBtn.addEventListener('click', () => {
        searchQuery = searchInput.value.trim();
        sectionTitle.textContent = searchQuery ? `Resultados para: "${searchQuery}"` : 'Todos los Productos';
        renderProducts();
    });

    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });

    const categoriesHamburgerBtn = document.getElementById('categoriesHamburgerBtn');
    if (categoriesHamburgerBtn) {
        categoriesHamburgerBtn.addEventListener('click', () => {
            categoriesContainer.classList.toggle('open');
        });
    }

    // Cerrar menú de categorías al hacer clic fuera en móvil
    document.addEventListener('click', (e) => {
        const stickyFilterBar = document.querySelector('.sticky-filter-bar');
        if (stickyFilterBar && !stickyFilterBar.contains(e.target)) {
            categoriesContainer.classList.remove('open');
        }
    });

    cartToggleBtn.addEventListener('click', () => {
        cartModal.classList.add('open');
    });

    closeCartBtn.addEventListener('click', () => {
        cartModal.classList.remove('open');
    });

    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.classList.remove('open');
        }
    });

    whatsappCheckoutBtn.addEventListener('click', sendWhatsAppOrder);
}

// Funciones del Carrito
window.addToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    
    // Feedback visual rápido
    cartToggleBtn.style.transform = 'scale(1.1)';
    setTimeout(() => cartToggleBtn.style.transform = 'scale(1)', 200);
}

window.removeFromCart = function(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

window.changeQuantity = function(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCartUI();
    }
}

function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalCount;

    cartItemsContainer.innerHTML = '';
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p style="text-align: center; color: var(--text-muted); margin-top: 2rem;">Tu carrito está vacío.</p>`;
        cartTotalPrice.textContent = '$0';
        return;
    }

    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>$${item.price.toLocaleString('es-AR')} x ${item.quantity}</p>
            </div>
            <div class="cart-item-actions">
                <button onclick="changeQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="changeQuantity(${item.id}, 1)">+</button>
                <button onclick="removeFromCart(${item.id})" style="color: #ef4444; margin-left: 0.5rem;" title="Eliminar">&times;</button>
            </div>
        `;
        cartItemsContainer.appendChild(div);
    });

    cartTotalPrice.textContent = `$${total.toLocaleString('es-AR')}`;
}

// Enviar pedido por WhatsApp
function sendWhatsAppOrder() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío. Agrega productos antes de enviar el pedido.');
        return;
    }

    let message = '¡Hola! 👋 Me gustaría hacer el siguiente pedido:\n\n';
    let total = 0;

    cart.forEach((item, index) => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        message += `${index + 1}. *${item.name}* (Cant: ${item.quantity}) - $${subtotal.toLocaleString('es-AR')}\n`;
    });

    message += `\n*Total a pagar: $${total.toLocaleString('es-AR')}*\n\n¿Podrían confirmarme stock y formas de pago/envío? ¡Gracias!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
}
