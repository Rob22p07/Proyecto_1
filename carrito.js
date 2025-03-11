let total = 0; 

function addToCart(productName, price) {
    const cartTable = document.getElementById('cartTable').querySelector('tbody');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${productName}</td>
        <td>$${price}</td>
        <td><button onclick="removeFromCart(this, ${price})">Eliminar</button></td>
    `;

    cartTable.appendChild(row);
    updateTotal(Number(price)); // Asegurar que el precio es un número
}

function removeFromCart(button, price) {
    const row = button.parentElement.parentElement;
    row.remove();
    updateTotal(-Number(price)); // Asegurar que el precio es un número
}

function updateTotal(amount) {
    total += amount; // Actualiza la variable global total
    document.getElementById('totalPrice').textContent = `$${total}`;
}