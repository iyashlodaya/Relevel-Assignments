const email = localStorage.getItem("email");
const password = localStorage.getItem("password");

console.log(JSON.stringify(email));
console.log(JSON.stringify(password));

const username = email.split("@")[0];

document.getElementById("userEmail").innerHTML = `
<a href="#" class="nav-link text-white">
Hi, ${username}
</a>
`;

function viewProduct(id) {
  console.log(id);
  let productCard = document.getElementById(id);
  let productName = productCard.children[1].children[0].innerText;
  let productImagePath = productCard.children[0].children[0].src;

  localStorage.setItem("productName", productName);
  localStorage.setItem("productImagePath", productImagePath);

  window.location.href = "../html/productDetails.html";

  console.log(productName);
  console.log(productImagePath);
}
