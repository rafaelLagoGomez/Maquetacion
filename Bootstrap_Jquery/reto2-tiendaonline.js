
const items = [];

function addNewItem(name, price) {
    let product = {
        name: name,
        price: price
    };
    items.push(product);
    console.log(items);
    refreshItems();
}


function totalPrice() {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i].price;
    }
    return total;
}


function refreshItems() {
    let listaCarrito = document.querySelector('#listacarrito');
    listaCarrito.innerHTML = '';
    for (let i = 0; i < items.length; i++) {
        let elementoProducto = document.createElement('li');
        elementoProducto.textContent = items[i].name + ": " + items[i].price + "€";
        listaCarrito.appendChild(elementoProducto);
    }
    let elementoTotal = document.querySelector('#total');
    elementoTotal.textContent = totalPrice() + "€";
}


