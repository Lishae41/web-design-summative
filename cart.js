let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});

// Render table rows and total
function renderCart() {
    const tableBody = document.getElementById('cart-table-body');
    const totalElement = document.getElementById('cart-total');
    const badgeElement = document.getElementById('cart-count');

    tableBody.innerHTML = '';
    let grandTotal = 0;
    let totalItems = 0;

    if (cart.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 20px;">Your cart is empty.</td></tr>`;
    } else {
        cart.forEach((item, index) => {
            const subtotal = item.price * item.quantity;
            grandTotal += subtotal;
            totalItems += item.quantity;

            const row = document.createElement('tr');
            row.style.borderBottom = '1px solid #eee';

            row.innerHTML = `
                <td style="padding: 10px;">${item.name}</td>
                <td style="padding: 10px;">£${item.price.toFixed(2)}</td>
                <td style="padding: 10px;">
                    <input type="number" value="${item.quantity}" min="1" 
                           onchange="updateQuantity(${index}, this.value)" 
                           style="width: 50px; padding: 5px;">
                </td>
                <td style="padding: 10px;">£${subtotal.toFixed(2)}</td>
                <td style="padding: 10px;">
                    <button onclick="removeItem(${index})" style="color: red; border: none; background: none; cursor: pointer;">
                        Remove
                    </button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Update total and header badge count
    totalElement.textContent = grandTotal.toFixed(2);
    if (badgeElement) {
        badgeElement.textContent = totalItems;
    }
}

// Change quantity from input
function updateQuantity(index, quantity) {
    const qty = parseInt(quantity);
    if (qty > 0) {
        cart[index].quantity = qty;
    } else {
        cart.splice(index, 1);
    }
    saveAndRefresh();
}

// Remove item from cart
function removeItem(index) {
    cart.splice(index, 1);
    saveAndRefresh();
}

// Save back to storage and re-render page
function saveAndRefresh() {
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Checkout handler
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Thank you for your order!");
    cart = [];
    localStorage.removeItem('cart');
    renderCart();
}
