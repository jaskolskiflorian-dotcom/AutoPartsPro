// Beispiel-Daten für Autoteile (diese kannst du später erweitern)
const products = [
    { name: "Bremsbeläge", price: "49,99 €", image: "https://images.unsplash.com/photo-1586262072852-4431574276e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
    { name: "Ölfilter", price: "12,50 €", image: "https://images.unsplash.com/photo-1619646882312-4599b3383685?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" },
    { name: "Scheinwerfer", price: "129,00 €", image: "https://images.unsplash.com/photo-1613214149991-341181033257?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" }
];

function displayProducts() {
    const grid = document.querySelector('.product-grid');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" style="width:100%; height:150px; object-fit:cover;">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button>In den Warenkorb</button>
        `;
        grid.appendChild(productCard);
    });
}

// Produkte beim Laden der Seite anzeigen
document.addEventListener('DOMContentLoaded', displayProducts);