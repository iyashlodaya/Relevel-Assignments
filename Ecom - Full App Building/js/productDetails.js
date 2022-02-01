let productImage = document.getElementById("product-image");
let productDisplayName = document.getElementById("product-name");

let productImagePath = localStorage.getItem("productImagePath");
let productName = localStorage.getItem("productName");

productImage.src = productImagePath;
productDisplayName.innerText = productName;

function renderProduct() {}
