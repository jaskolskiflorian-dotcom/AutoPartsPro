const products = [
  {
    name: "Bremsbeläge",
    price: "0,00 €",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=300&q=80"
  },
  {
    name: "Ölfilter",
    price: "0,00 €",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=300&q=80"
  },
  {
    name: "Scheinwerfer",
    price: "0,00 €",
    image: "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?w=300&q=80"
  }
];

let cart = [];

function displayProducts() {
  const grid = document.querySelector('.product-grid');
  grid.innerHTML = '';
  
  products.forEach((product, index) => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" style="width:100%; height:150px; object-fit:cover;">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button onclick="addToCart(${index})">In den Warenkorb</button>
    `;
    grid.appendChild(productCard);
  });
}

function addToCart(index) {
  cart.push(products[index]);
  alert(products[index].name + " wurde zum Warenkorb hinzugefügt! (Gesamt im Warenkorb: " + cart.length + ")");
}

document.addEventListener('DOMContentLoaded', displayProducts);