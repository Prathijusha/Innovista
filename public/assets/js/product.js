// Interior Design Categories and Subcategories
const interiorCategories = {
    furniture: {
        name: "Furniture",
        subcategories: [
            { name: "Sofas", icon: "fas fa-couch" },
            { name: "Beds", icon: "fas fa-bed" },
            { name: "Office Furniture", icon: "fas fa-briefcase" }
        ]
    },
    bath: {
        name: "Bathroom",
        subcategories: [
            { name: "Bathroom Vanities", icon: "fas fa-bath" },
            { name: "Bathroom Accessories", icon: "fas fa-shower" },
            { name: "Bathroom Mirrors", icon: "fas fa-mirror" },
            { name: "Bathroom Lighting", icon: "fas fa-lightbulb" },
            { name: "Shower & Tub", icon: "fas fa-hot-tub" }
        ]
    },
    lighting: {
        name: "Lighting",
        subcategories: [
            { name: "Table Lamps", icon: "fas fa-lightbulb" },
            { name: "Ceiling Lights", icon: "fas fa-lightbulb" },
            { name: "Floor Lamps", icon: "fas fa-lightbulb" },
            { name: "Wall Sconces", icon: "fas fa-lightbulb" }
        ]
    },
    kitchen: {
        name: "Kitchen",
        subcategories: [
            { name: "Kitchen Cabinets", icon: "fas fa-cabinet-filing" },
            { name: "Kitchen Appliances", icon: "fas fa-blender" },
            { name: "Kitchen Sinks", icon: "fas fa-sink" },
            { name: "Kitchen Countertops", icon: "fas fa-table" },
            { name: "Kitchen Storage", icon: "fas fa-boxes" }
        ]
    }
};

// Global variables
let selectedCategory = null;
let selectedSubcategory = null;

// Painting Section Variables
let selectedColor = null;
let selectedBrand = null;
let selectedPaintType = null;
let selectedQuantity = null;
let customLiters = 0;

// Color definitions for different product categories
const productColors = {
    furniture: {
        'Gray': '#808080',
        'Beige': '#F5F5DC',
        'Navy Blue': '#000080',
        'Charcoal': '#36454F',
        'White': '#FFFFFF',
        'Brown': '#8B4513',
        'Black': '#000000',
        'Navy': '#000080',
        'Light Brown': '#CD853F',
        'Cream': '#FFFDD0'
    },
    beds: {
        'Baby Pink': '#FFC0CB',
        'Wooden': '#8B4513',
        'Black': '#000000',
        'White': '#FFFFFF'
    },
    lighting: {
        'Silver': '#C0C0C0',
        'Gold': '#FFD700',
        'Bronze': '#CD7F32',
        'Black': '#000000',
        'White': '#FFFFFF',
        'Chrome': '#E8E8E8',
        'Brass': '#B8860B',
        'Nickel': '#727472',
        'Copper': '#B87333',
        'Antique Brass': '#CD7F32'
    },
    bathroom: {
        'White': '#FFFFFF',
        'Off-White': '#F5F5F5',
        'Light Gray': '#D3D3D3',
        'Chrome': '#E8E8E8',
        'Brass': '#B8860B',
        'Oil-Rubbed Bronze': '#3C2F2F',
        'Polished Nickel': '#727472',
        'Matte Black': '#000000',
        'Antique White': '#FAEBD7',
        'Pearl': '#F0EAD6'
    },
    kitchen: {
        'White': '#FFFFFF',
        'Cream': '#FFFDD0',
        'Light Gray': '#D3D3D3',
        'Dark Gray': '#696969',
        'Black': '#000000',
        'Stainless Steel': '#E8E8E8',
        'Chrome': '#E8E8E8',
        'Oil-Rubbed Bronze': '#3C2F2F',
        'Antique White': '#FAEBD7',
        'Pearl': '#F0EAD6'
    }
};

// Color name mappings for better display
const colorNameMap = {
    '#808080': 'Classic Gray',
    '#F5F5DC': 'Warm Beige',
    '#000080': 'Deep Navy',
    '#36454F': 'Rich Charcoal',
    '#FFFFFF': 'Pure White',
    '#8B4513': 'Warm Brown',
    '#000000': 'Jet Black',
    '#CD853F': 'Light Brown',
    '#FFFDD0': 'Soft Cream',
    '#C0C0C0': 'Polished Silver',
    '#FFD700': 'Luxury Gold',
    '#CD7F32': 'Antique Bronze',
    '#E8E8E8': 'Modern Chrome',
    '#B8860B': 'Classic Brass',
    '#727472': 'Sleek Nickel',
    '#B87333': 'Rich Copper',
    '#F5F5F5': 'Off-White',
    '#D3D3D3': 'Light Gray',
    '#3C2F2F': 'Oil-Rubbed Bronze',
    '#FAEBD7': 'Antique White',
    '#F0EAD6': 'Pearl Finish',
    '#696969': 'Dark Gray',
    // Bed-specific colors
    '#FFC0CB': 'Baby Pink',
    '#8B4513': 'Natural Wood'
};

// Color to hex mapping
const colorHexMap = {
    'Crimson Red': '#DC143C',
    'Ruby Red': '#E0115F',
    'Scarlet Red': '#FF2400',
    'Burgundy': '#800020',
    'Navy Blue': '#000080',
    'Sky Blue': '#87CEEB',
    'Royal Blue': '#4169E1',
    'Teal Blue': '#008080',
    'Forest Green': '#228B22',
    'Sage Green': '#9CAF88',
    'Emerald Green': '#50C878',
    'Olive Green': '#808000',
    'Golden Yellow': '#FFD700',
    'Lemon Yellow': '#FFFACD',
    'Mustard Yellow': '#FFDB58',
    'Cream Yellow': '#FFFDD0',
    'Pure White': '#FFFFFF',
    'Off White': '#F5F5DC',
    'Light Grey': '#D3D3D3',
    'Charcoal Grey': '#36454F',
    'Warm Brown': '#8B4513',
    'Beige': '#F5F5DC',
    'Coffee Brown': '#6F4E37',
    'Taupe': '#483C32',
    // Mixed Colors
    'Lavender Purple': '#E6E6FA',
    'Coral Pink': '#FF7F50',
    'Mint Green': '#98FF98',
    'Peach Orange': '#FFCBA4',
    'Steel Blue': '#4682B4',
    'Rose Gold': '#B76E79',
    'Teal Green': '#008080',
    'Amber Yellow': '#FFBF00'
};

// Paint type base prices
const paintTypePrices = {
    'interior': 50,
    'exterior': 100,
    'acrylic': 75,
    'oil': 120,
    'wood': 90,
    'waterproof': 150
};

// Professional Paint Cart Management
let paintCart = JSON.parse(localStorage.getItem('paintCart') || '[]');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeInteriorCategorySelection();
    initializeNavigation();
    initializePaintingSection();
    updatePaintCartCount();
    updateCustomColor();
    initializeColorSelection();
});

// Navigation functionality
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const productSections = document.querySelectorAll('.product-section');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const service = this.getAttribute('data-service');
            
            // Update active nav item
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding section
            productSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === `${service}-section`) {
                    section.classList.add('active');
                }
            });
            
            // Reset filters when switching services
            resetFilters();
        });
    });
}

// Interior Design Category Selection - Updated for sidebar
function initializeInteriorCategorySelection() {
    const categoryItems = document.querySelectorAll('.sidebar-category-item[data-category]');
    
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update selected category
            categoryItems.forEach(categoryItem => categoryItem.classList.remove('selected'));
            this.classList.add('selected');
            selectedCategory = category;
            
            // Show subcategories for selected category
            showSubcategories(category);
            
            // Filter products based on category
            filterInteriorProducts();
        });
    });
}

// Show subcategories for selected category
function showSubcategories(category) {
    const categoryData = interiorCategories[category];
    if (!categoryData) return;
    
    const subcategoryGrid = document.getElementById('subcategoryGrid');
    const subcategorySelection = document.getElementById('subcategorySelection');
    
    // Clear existing subcategories
    subcategoryGrid.innerHTML = '';
    
    // Generate subcategory cards
    categoryData.subcategories.forEach(subcategory => {
        const subcategoryCard = document.createElement('div');
        subcategoryCard.className = 'subcategory-card';
        subcategoryCard.setAttribute('data-subcategory', subcategory.name.toLowerCase().replace(/\s+/g, '-'));
        
        subcategoryCard.innerHTML = `
            <div class="subcategory-icon">
                <i class="${subcategory.icon}"></i>
            </div>
            <span>${subcategory.name}</span>
        `;
        
        subcategoryCard.addEventListener('click', function() {
            // Update selected subcategory
            document.querySelectorAll('.subcategory-card').forEach(card => card.classList.remove('selected'));
            this.classList.add('selected');
            selectedSubcategory = subcategory.name;
            
            // Filter products based on subcategory
            filterInteriorProducts();
        });
        
        subcategoryGrid.appendChild(subcategoryCard);
    });
    
    // Show subcategory section
    subcategorySelection.style.display = 'block';
}

// Filter interior design products
function filterInteriorProducts() {
    const productItems = document.querySelectorAll('#interiorProducts .product-item');
    
    productItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        let showItem = true;
        
        // Filter by main category
        if (selectedCategory && itemCategory !== selectedCategory) {
            showItem = false;
        }
        
        // Filter by subcategory if selected
        if (selectedSubcategory && showItem) {
            const categoryName = item.querySelector('.category-name')?.textContent;
            if (categoryName && !categoryName.toLowerCase().includes(selectedSubcategory.toLowerCase())) {
                showItem = false;
            }
        }
        
        // Show/hide item with animation
        if (showItem) {
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, 50);
        } else {
            item.style.opacity = '0.5';
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}

// Reset filters
function resetFilters() {
    selectedCategory = null;
    selectedSubcategory = null;
    
    // Reset category selection
    document.querySelectorAll('.sidebar-category-item').forEach(item => item.classList.remove('selected'));
    document.querySelectorAll('.subcategory-card').forEach(card => card.classList.remove('selected'));
    
    // Hide subcategory section
    document.getElementById('subcategorySelection').style.display = 'none';
    
    // Show all products
    const productItems = document.querySelectorAll('#interiorProducts .product-item');
    productItems.forEach(item => {
        item.style.display = 'block';
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
    });
}

// Initialize painting section
function initializePaintingSection() {
    // Brand selection
    const brandCards = document.querySelectorAll('.brand-card');
    brandCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove previous selection
            brandCards.forEach(c => c.classList.remove('selected'));
            // Add selection to clicked card
            this.classList.add('selected');
            selectedBrand = this.dataset.brand;
        });
    });

    // Color selection
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove previous selection
            colorOptions.forEach(o => o.classList.remove('selected'));
            // Add selection to clicked option
            this.classList.add('selected');
            
            selectedColor = {
                name: this.dataset.color,
                price: parseInt(this.dataset.price),
                hex: colorHexMap[this.dataset.color]
            };
            
            // Open paint type modal
            openPaintTypeModal();
        });
    });

    // Paint type selection
    const paintTypeOptions = document.querySelectorAll('.paint-type-option');
    paintTypeOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove previous selection
            paintTypeOptions.forEach(o => o.classList.remove('selected'));
            // Add selection to clicked option
            this.classList.add('selected');
            selectedPaintType = {
                type: this.dataset.type,
                basePrice: parseInt(this.dataset.basePrice)
            };
        });
    });

    // Quantity selection
    const quantityOptions = document.querySelectorAll('.quantity-option');
    quantityOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove previous selection
            quantityOptions.forEach(o => o.classList.remove('selected'));
            // Add selection to clicked option
            this.classList.add('selected');
            
            const quantity = this.dataset.quantity;
            if (quantity === 'custom') {
                document.getElementById('customQuantitySection').style.display = 'block';
                document.getElementById('customLiters').focus();
            } else {
                document.getElementById('customQuantitySection').style.display = 'none';
                selectedQuantity = parseInt(quantity);
                updateTotalPrice();
            }
        });
    });

    // Custom quantity input
    const customLitersInput = document.getElementById('customLiters');
    if (customLitersInput) {
        customLitersInput.addEventListener('input', function() {
            customLiters = parseInt(this.value) || 0;
            selectedQuantity = customLiters;
            updateTotalPrice();
        });
    }
}

// Modal Functions
function openPaintTypeModal() {
    if (!selectedColor) return;
    
    document.getElementById('selectedColorName').textContent = selectedColor.name;
    document.getElementById('selectedColorDisplay').style.background = selectedColor.hex;
    
    // Reset paint type selection
    document.querySelectorAll('.paint-type-option').forEach(o => o.classList.remove('selected'));
    selectedPaintType = null;
    
    document.getElementById('paintTypeModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closePaintTypeModal() {
    document.getElementById('paintTypeModal').style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Reset color selection
    document.querySelectorAll('.color-option').forEach(o => o.classList.remove('selected'));
    selectedColor = null;
}

function proceedToQuantity() {
    if (!selectedPaintType) {
        alert('Please select a paint type');
        return;
    }
    
    // Update summary
    document.getElementById('summaryColorName').textContent = selectedColor.name;
    document.getElementById('summaryColorDisplay').style.background = selectedColor.hex;
    document.getElementById('summaryPaintType').textContent = selectedPaintType.type.charAt(0).toUpperCase() + selectedPaintType.type.slice(1) + ' Paint';
    document.getElementById('summaryBasePrice').textContent = `Rs. ${selectedColor.price + selectedPaintType.basePrice}/L`;
    
    // Calculate and display prices
    updateQuantityPrices();
    
    // Reset quantity selection
    document.querySelectorAll('.quantity-option').forEach(o => o.classList.remove('selected'));
    document.getElementById('customQuantitySection').style.display = 'none';
    selectedQuantity = null;
    customLiters = 0;
    
    // Close paint type modal and open quantity modal
    document.getElementById('paintTypeModal').style.display = 'none';
    document.getElementById('quantityModal').style.display = 'block';
}

function closeQuantityModal() {
    document.getElementById('quantityModal').style.display = 'none';
    document.getElementById('paintTypeModal').style.display = 'block';
}

function updateQuantityPrices() {
    const basePrice = selectedColor.price + selectedPaintType.basePrice;
    
    document.getElementById('price5L').textContent = `Rs. ${basePrice * 5}`;
    document.getElementById('price10L').textContent = `Rs. ${basePrice * 10}`;
    document.getElementById('price20L').textContent = `Rs. ${basePrice * 20}`;
}

function updateTotalPrice() {
    if (!selectedColor || !selectedPaintType || !selectedQuantity) return;
    
    const basePrice = selectedColor.price + selectedPaintType.basePrice;
    const totalPrice = basePrice * selectedQuantity;
    
    document.getElementById('totalPrice').textContent = `Rs. ${totalPrice}`;
    
    if (selectedQuantity === customLiters && customLiters > 0) {
        document.getElementById('customPrice').textContent = `Rs. ${totalPrice}`;
    }
}

function updatePaintCartCount() {
    const cartCount = paintCart.length;
    document.getElementById('paintCartCount').textContent = cartCount;
}

function addToCart() {
    if (!selectedColor || !selectedPaintType || !selectedQuantity) {
        showPaintMessage('Please complete your selection', 'error');
        return;
    }
    
    const basePrice = selectedColor.price + selectedPaintType.basePrice;
    const totalPrice = basePrice * selectedQuantity;
    
    const paintItem = {
        id: `paint_${Date.now()}`,
        name: `${selectedColor.name} ${selectedPaintType.type.charAt(0).toUpperCase() + selectedPaintType.type.slice(1)} Paint`,
        color: selectedColor.name,
        colorHex: selectedColor.hex,
        type: selectedPaintType.type,
        quantity: selectedQuantity,
        price: totalPrice,
        pricePerLiter: basePrice,
        brand: selectedBrand || 'Generic',
        timestamp: Date.now()
    };
    
    // Add to paint cart
    paintCart.push(paintItem);
    localStorage.setItem('paintCart', JSON.stringify(paintCart));
    
    // Update cart count
    updatePaintCartCount();
    
    // Show success message
    showPaintMessage(`Added to cart: ${paintItem.name} - ${selectedQuantity}L for Rs. ${totalPrice}`, 'success');
    
    // Close modal and reset
    document.getElementById('quantityModal').style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Reset selections
    document.querySelectorAll('.color-option').forEach(o => o.classList.remove('selected'));
    document.querySelectorAll('.brand-card').forEach(b => b.classList.remove('selected'));
    selectedColor = null;
    selectedBrand = null;
    selectedPaintType = null;
    selectedQuantity = null;
    customLiters = 0;
}

function openPaintCart() {
    const cartModal = document.getElementById('paintCartModal');
    cartModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    renderPaintCart();
}

function closePaintCart() {
    const cartModal = document.getElementById('paintCartModal');
    cartModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function renderPaintCart() {
    const cartItemsContainer = document.getElementById('paintCartItems');
    const totalItemsElement = document.getElementById('paintCartTotalItems');
    const totalAmountElement = document.getElementById('paintCartTotalAmount');
    
    if (paintCart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h4>Your cart is empty</h4>
                <p>Start shopping for paints to add items to your cart</p>
            </div>
        `;
        totalItemsElement.textContent = '0';
        totalAmountElement.textContent = 'Rs. 0';
        return;
    }
    
    let totalItems = 0;
    let totalAmount = 0;
    
    const cartItemsHTML = paintCart.map(item => {
        totalItems += item.quantity;
        totalAmount += item.price;
        
        return `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-color" style="background: ${item.colorHex}"></div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-specs">
                        Brand: ${item.brand} | Type: ${item.type} | Color: ${item.color}
                    </div>
                    <div class="cart-item-price">Rs. ${item.price} (Rs. ${item.pricePerLiter}/L)</div>
                </div>
                <div class="cart-item-actions">
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updatePaintQuantity('${item.id}', -1)">-</button>
                        <span class="quantity-display">${item.quantity}L</span>
                        <button class="quantity-btn" onclick="updatePaintQuantity('${item.id}', 1)">+</button>
                    </div>
                    <button class="remove-item" onclick="removePaintItem('${item.id}')">Remove</button>
                </div>
            </div>
        `;
    }).join('');
    
    cartItemsContainer.innerHTML = cartItemsHTML;
    totalItemsElement.textContent = totalItems;
    totalAmountElement.textContent = `Rs. ${totalAmount.toLocaleString()}`;
}

function updatePaintQuantity(itemId, change) {
    const item = paintCart.find(item => item.id === itemId);
    if (!item) return;
    
    const newQuantity = item.quantity + change;
    if (newQuantity <= 0) {
        removePaintItem(itemId);
        return;
    }
    
    item.quantity = newQuantity;
    item.price = item.pricePerLiter * newQuantity;
    
    localStorage.setItem('paintCart', JSON.stringify(paintCart));
    renderPaintCart();
    showPaintMessage(`Quantity updated to ${newQuantity}L`, 'success');
}

function removePaintItem(itemId) {
    paintCart = paintCart.filter(item => item.id !== itemId);
    localStorage.setItem('paintCart', JSON.stringify(paintCart));
    updatePaintCartCount();
    renderPaintCart();
    showPaintMessage('Item removed from cart', 'success');
}

function clearPaintCart() {
    if (paintCart.length === 0) {
        showPaintMessage('Cart is already empty', 'info');
        return;
    }
    
    if (confirm('Are you sure you want to clear your cart?')) {
        paintCart = [];
        localStorage.setItem('paintCart', JSON.stringify(paintCart));
        updatePaintCartCount();
        renderPaintCart();
        showPaintMessage('Cart cleared successfully', 'success');
    }
}

function checkoutPaintCart() {
    if (paintCart.length === 0) {
        showPaintMessage('Your cart is empty', 'error');
        return;
    }
    
    const totalAmount = paintCart.reduce((sum, item) => sum + item.price, 0);
    const totalItems = paintCart.reduce((sum, item) => sum + item.quantity, 0);
    
    const orderSummary = paintCart.map(item => 
        `${item.name} - ${item.quantity}L (Rs. ${item.price})`
    ).join('\n');
    
    const checkoutMessage = `Order Summary:\n\n${orderSummary}\n\nTotal Items: ${totalItems}L\nTotal Amount: Rs. ${totalAmount.toLocaleString()}\n\nProceed with checkout?`;
    
    if (confirm(checkoutMessage)) {
        // Here you would typically redirect to a checkout page or payment gateway
        showPaintMessage('Redirecting to checkout...', 'success');
        setTimeout(() => {
            alert('Checkout functionality would be integrated here with payment gateway.');
        }, 1000);
    }
}

function showPaintMessage(message, type = 'success') {
    // Remove existing message
    const existingMessage = document.querySelector('.paint-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `paint-message ${type}`;
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        z-index: 3000;
        font-weight: 500;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        color: white;
    `;
    
    // Set background color based on type
    switch(type) {
        case 'success':
            messageDiv.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
            break;
        case 'error':
            messageDiv.style.background = 'linear-gradient(135deg, #dc3545, #c82333)';
            break;
        case 'info':
            messageDiv.style.background = 'linear-gradient(135deg, #17a2b8, #138496)';
            break;
        default:
            messageDiv.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
    }
    
    messageDiv.textContent = message;
    document.body.appendChild(messageDiv);
    
    // Animate in
    setTimeout(() => {
        messageDiv.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        messageDiv.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.parentNode.removeChild(messageDiv);
            }
        }, 300);
    }, 3000);
}

// Close modals when clicking outside
window.addEventListener('click', function(event) {
    const paintTypeModal = document.getElementById('paintTypeModal');
    const quantityModal = document.getElementById('quantityModal');
    const paintCartModal = document.getElementById('paintCartModal');
    
    if (event.target === paintTypeModal) {
        closePaintTypeModal();
    }
    if (event.target === quantityModal) {
        closeQuantityModal();
    }
    if (event.target === paintCartModal) {
        closePaintCart();
    }
});

// Close modals with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePaintTypeModal();
        closeQuantityModal();
        closePaintCart();
    }
});

// Custom Color Functions
let customColorHex = '#ff0000';
let customColorName = 'Custom Red';

function updateCustomColor() {
    const colorPicker = document.getElementById('customColorPicker');
    const colorSwatch = document.getElementById('customColorSwatch');
    const colorNameElement = document.getElementById('customColorName');
    const colorHexElement = document.getElementById('customColorHex');
    const colorPriceElement = document.getElementById('customColorPrice');
    
    customColorHex = colorPicker.value;
    customColorName = getColorName(customColorHex);
    
    // Update display
    colorSwatch.style.background = customColorHex;
    colorNameElement.textContent = customColorName;
    colorHexElement.textContent = customColorHex.toUpperCase();
    
    // Calculate price based on color complexity
    const price = calculateCustomColorPrice(customColorHex);
    colorPriceElement.textContent = `Rs. ${price}/L`;
}

function setPresetColor(hex, name) {
    const colorPicker = document.getElementById('customColorPicker');
    const colorSwatch = document.getElementById('customColorSwatch');
    const colorNameElement = document.getElementById('customColorName');
    const colorHexElement = document.getElementById('customColorHex');
    const colorPriceElement = document.getElementById('customColorPrice');
    
    customColorHex = hex;
    customColorName = name;
    
    // Update color picker and display
    colorPicker.value = hex;
    colorSwatch.style.background = hex;
    colorNameElement.textContent = name;
    colorHexElement.textContent = hex.toUpperCase();
    
    // Calculate price
    const price = calculateCustomColorPrice(hex);
    colorPriceElement.textContent = `Rs. ${price}/L`;
    
    // Show feedback
    showPaintMessage(`Preset color "${name}" selected`, 'success');
}

function selectCustomColor() {
    // Reset all color selections
    document.querySelectorAll('.color-option').forEach(o => o.classList.remove('selected'));
    
    // Set custom color as selected
    selectedColor = {
        name: customColorName,
        price: calculateCustomColorPrice(customColorHex),
        hex: customColorHex
    };
    
    // Show feedback
    showPaintMessage(`Custom color "${customColorName}" selected`, 'success');
    
    // Open paint type modal
    openPaintTypeModal();
}

function getColorName(hex) {
    // Simple color naming based on hex values
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    
    // Basic color classification
    if (r > 200 && g < 100 && b < 100) return 'Custom Red';
    if (r < 100 && g > 200 && b < 100) return 'Custom Green';
    if (r < 100 && g < 100 && b > 200) return 'Custom Blue';
    if (r > 200 && g > 200 && b < 100) return 'Custom Yellow';
    if (r > 200 && g < 100 && b > 200) return 'Custom Magenta';
    if (r < 100 && g > 200 && b > 200) return 'Custom Cyan';
    if (r > 200 && g > 200 && b > 200) return 'Custom White';
    if (r < 50 && g < 50 && b < 50) return 'Custom Black';
    if (r === g && g === b) return 'Custom Gray';
    
    // More specific colors
    if (r > g && r > b) {
        if (g > 150) return 'Custom Orange';
        if (b > 150) return 'Custom Pink';
        return 'Custom Red';
    }
    if (g > r && g > b) {
        if (r > 150) return 'Custom Lime';
        if (b > 150) return 'Custom Teal';
        return 'Custom Green';
    }
    if (b > r && b > g) {
        if (r > 150) return 'Custom Purple';
        if (g > 150) return 'Custom Cyan';
        return 'Custom Blue';
    }
    
    return 'Custom Color';
}

function calculateCustomColorPrice(hex) {
    // Calculate price based on color complexity and RGB values
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    
    // Base price
    let basePrice = 600;
    
    // Add complexity premium
    const colorVariance = Math.abs(r - g) + Math.abs(g - b) + Math.abs(b - r);
    if (colorVariance > 200) basePrice += 100; // High contrast colors
    if (colorVariance < 50) basePrice += 50;   // Similar RGB values
    
    // Add brightness premium
    const brightness = (r + g + b) / 3;
    if (brightness > 200) basePrice += 50;     // Very light colors
    if (brightness < 50) basePrice += 75;      // Very dark colors
    
    // Add saturation premium
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const saturation = max === 0 ? 0 : (max - min) / max;
    if (saturation > 0.8) basePrice += 100;    // Highly saturated colors
    if (saturation < 0.2) basePrice += 25;     // Low saturation colors
    
    return basePrice;
}

// Initialize custom color picker
document.addEventListener('DOMContentLoaded', function() {
    updateCustomColor();
});

// Initialize color selection for products
function initializeColorSelection() {
    const productItems = document.querySelectorAll('.product-item');
    
    productItems.forEach(item => {
        const colorSelect = item.querySelector('select');
        if (colorSelect) {
            const category = item.getAttribute('data-category');
            replaceColorSelectWithDropdown(colorSelect, category);
        }
    });
}

// Replace dropdown with enhanced color dropdown
function replaceColorSelectWithDropdown(selectElement, category) {
    const productItem = selectElement.closest('.product-item');
    
    // Check if this is a bed product by looking at the category name
    const categoryNameElement = productItem.querySelector('.category-name');
    const isBedProduct = categoryNameElement && categoryNameElement.textContent === 'Beds';
    
    // Get colors for this category - use bed colors if it's a bed product
    let colors;
    if (isBedProduct) {
        colors = productColors.beds;
    } else {
        colors = productColors[category] || productColors.furniture;
    }
    
    // Create color selection container
    const colorSelection = document.createElement('div');
    colorSelection.className = 'color-selection';
    
    const colorTitle = document.createElement('h5');
    colorTitle.innerHTML = '<i class="fas fa-palette"></i> Choose Color';
    colorSelection.appendChild(colorTitle);
    
    // Create row container for inline layout
    const colorRow = document.createElement('div');
    colorRow.className = 'color-selection-row';
    
    const dropdownContainer = document.createElement('div');
    dropdownContainer.className = 'color-dropdown-container';
    
    // Create enhanced dropdown
    const colorDropdown = document.createElement('select');
    colorDropdown.className = 'color-dropdown';
    
    // Add default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select a color...';
    colorDropdown.appendChild(defaultOption);
    
    // Add color options with descriptive names
    Object.entries(colors).forEach(([colorName, hexCode]) => {
        const option = document.createElement('option');
        option.value = colorName;
        option.textContent = colorNameMap[hexCode] || colorName;
        option.setAttribute('data-hex', hexCode);
        colorDropdown.appendChild(option);
    });
    
    // Add change event
    colorDropdown.addEventListener('change', function() {
        selectColorDropdown(this, productItem, colorRow);
    });
    
    dropdownContainer.appendChild(colorDropdown);
    colorRow.appendChild(dropdownContainer);
    colorSelection.appendChild(colorRow);
    
    // Replace the select element
    const selectContainer = selectElement.parentElement;
    selectContainer.innerHTML = '';
    selectContainer.appendChild(colorSelection);
    
    // Set default selection
    if (colorDropdown.options.length > 1) {
        colorDropdown.selectedIndex = 1; // Select first color option
        selectColorDropdown(colorDropdown, productItem, colorRow);
    }
}

// Handle color dropdown selection
function selectColorDropdown(dropdown, productItem, colorRow) {
    const selectedOption = dropdown.options[dropdown.selectedIndex];
    
    if (selectedOption.value) {
        const colorName = selectedOption.value;
        const hexCode = selectedOption.getAttribute('data-hex');
        const displayName = selectedOption.textContent;
        
        // Update selected color display
        updateSelectedColorDisplay(productItem, colorName, hexCode, displayName, colorRow);
        
        // Store selected color in product item
        productItem.setAttribute('data-selected-color', colorName);
        productItem.setAttribute('data-selected-hex', hexCode);
    } else {
        // Remove selected color display if no option selected
        const existingDisplay = colorRow.querySelector('.selected-color-display');
        if (existingDisplay) {
            existingDisplay.remove();
        }
        
        // Clear stored color data
        productItem.removeAttribute('data-selected-color');
        productItem.removeAttribute('data-selected-hex');
    }
}

// Update selected color display
function updateSelectedColorDisplay(productItem, colorName, hexCode, displayName, colorRow) {
    // Remove existing display
    const existingDisplay = colorRow.querySelector('.selected-color-display');
    if (existingDisplay) {
        existingDisplay.remove();
    }
    
    // Create new display
    const selectedDisplay = document.createElement('div');
    selectedDisplay.className = 'selected-color-display';
    
    selectedDisplay.innerHTML = `
        <div class="selected-color-swatch" style="background-color: ${hexCode}"></div>
        <div class="selected-color-info">
            <div class="selected-color-name">${displayName}</div>
            <div class="selected-color-code">${hexCode}</div>
        </div>
    `;
    
    colorRow.appendChild(selectedDisplay);
}

// Get selected color for a product
function getSelectedColor(productItem) {
    return {
        name: productItem.getAttribute('data-selected-color'),
        hex: productItem.getAttribute('data-selected-hex')
    };
} 