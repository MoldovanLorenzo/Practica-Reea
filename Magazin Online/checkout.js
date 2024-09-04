let cartItems = [
    { name: "PC Gaming", price: 1500 },
    { name:"Tastatura" , price:100}
   
];

function updateOrderSummary() {
    let cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    let merchandiseTotal = 0;
    cartItems.forEach(item => {
        let itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `<p>${item.name}</p><p>${item.price} LEI</p>`;
        cartItemsContainer.appendChild(itemElement);

        merchandiseTotal += item.price;
    });

    document.getElementById('merchandise-total').textContent = `RON ${merchandiseTotal.toFixed(2)}`;
    
    let shipping = 19.95; 
    document.getElementById('shipping-total').textContent = `RON ${shipping.toFixed(2)}`;
    
    let tax = merchandiseTotal * 0.13; 
    document.getElementById('tax-total').textContent = `RON ${tax.toFixed(2)}`;

    let orderTotal = merchandiseTotal + shipping + tax;
    document.getElementById('order-total').textContent = `RON ${orderTotal.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', function() {
    updateOrderSummary();
});
