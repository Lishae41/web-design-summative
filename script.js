// Retrieve cart from localStorage or initialize empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update item count in header badge when page loads
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
});

// Function linked to your button click events: onclick="addToCart('Item Name', Price)"
function addToCart(name, price) {
    // Check if item already exists in cart
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: parseFloat(price),
            quantity: 1
        });
    }

    // Save back to browser storage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update count in navigation
    updateCartBadge();
    
    alert(`${name} has been added to your cart!`);
}

// Recalculate total quantity for badge: Cart (X)
function updateCartBadge() {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountElement.textContent = totalItems;
    }
}
