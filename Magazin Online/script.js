document.getElementById("cartButton").onclick = function() {
    document.getElementById("cartDrawer").style.width = "250px";
};

let cartItems = [];

function addToCart(productName, productPrice) {
    cartItems.push({ name: productName, price: productPrice });
    updateCartDrawer();
}

function calculateTotal() {
    let total = 0;
    cartItems.forEach(item => {
        total += item.price;
    });
    return total;
}

function updateCartDrawer() {
    const cartContent = document.querySelector('#cartDrawer .drawer-content');
    cartContent.innerHTML = `
        <span id="closeDrawer" class="close">&times;</span>
        <h2>Your Cart</h2>
    `;

    cartItems.forEach(item => {
        const productElement = document.createElement('p');
        productElement.textContent = `${item.name} - ${item.price} LEI`;
        cartContent.appendChild(productElement);
    });

    const totalElement = document.createElement('p');
    totalElement.textContent = `Total: ${calculateTotal()} LEI`;
    totalElement.style.fontWeight = 'bold';
    totalElement.style.marginTop = '20px';
    cartContent.appendChild(totalElement);

    document.getElementById("closeDrawer").onclick = function() {
        document.getElementById("cartDrawer").style.width = "0";
    };
}
