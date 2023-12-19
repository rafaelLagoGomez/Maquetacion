
class Product {
    constructor (id, name, img, price) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.price = price;
    }
}

const dataBase = [
    new Product (1, "Pantalón suelto gris", "pantalones_tallealto.png", 20),
    new Product (2, "Vestido Túnica", "vestido_tunico.png", 18),
    new Product (3, "Falda Mid Print", "falda_print.png", 12),
    new Product (4, "Cardigan Largo Rayas", "cardigan_largo_rayas.png", 22),
    new Product (5, "Falda Mini Zebra", "falda_mini_zebra.png", 19),
    new Product (6, "Mono Overol", "mono_overol.png", 29),
    new Product (7, "Jersey Dress", "vestido_jersey.png", 18),
    new Product (8, "Pantalón Ancho", "pantalon_ancho.png", 22)
]

const cardsContainer = document.getElementById("clothes-container");

function generateCards() {
    let htmlGenerateCards = "";
    dataBase.forEach(products => {
        const card = `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${products.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${products.name}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p class="card-price">${products.price}€</p>
                <button class="btn btn-dark" onclick="addItem(${products.id})">Añadir al carrito</button>
            </div>
        </div>`
        htmlGenerateCards += card;
    })
    cardsContainer.innerHTML = htmlGenerateCards;
}


const itemsChart = [];

function addItem(id) {
    itemsChart.push(dataBase.find(item => item.id == id));
}


function calculateTotalPrice() {
    let total = 0;
    itemsChart.forEach (product => {
        total += product.price;
    })
    return total;
}


function refreshItems() {
    let listaCarrito = document.querySelector('#listacarrito');
    listaCarrito.innerHTML = "";

    itemsChart.forEach (products => {
        let elementoProducto = document.createElement('li');
        elementoProducto.textContent = `${products.name}: ${products.price}€`;
        listaCarrito.appendChild(elementoProducto);
    })
    const elementoTotal = document.querySelector('#total');
    elementoTotal.textContent = `${calculateTotalPrice()}€`;
}