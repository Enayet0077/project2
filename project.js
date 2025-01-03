const loadAllProducts = () => {
    fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => {
            displayProducts(data);
        })
        .catch((error) => console.error('Error fetching products:', error)); // Added error handling
};

const displayProducts = (products) => {
    const productContainer = document.getElementById("product-container");
    products.forEach((product) => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
            <img class="cart-img" src="${product.image}" alt="${product.title}" />
            <h5>${product.title}</h5>
            <p>$${product.price}</p>
            <button>Details</button>
            <button onclick="handleAddToCart('${product.title}', ${product.price})">Add to cart</button>
        `;
        productContainer.appendChild(div);
    });
};

const handleAddToCart = (name, price) => {
    const container = document.getElementById("cart-main-container");
    console.log(name, price);

    const div = document.createElement("div");
    div.classList.add("cart-info");
    div.innerHTML = `
        <p>${name}</p>
        <h3>$${price}</h3>
    `;
    container.appendChild(div);
};

loadAllProducts();
