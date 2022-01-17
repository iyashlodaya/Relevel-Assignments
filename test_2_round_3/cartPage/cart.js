function redirectToCheckoutPage() {
  window.open("../checkoutPage/checkout.html", "_self");
}

var priceItem1 = document.getElementById("priceItem1");
var priceItem2 = document.getElementById("priceItem2");
var priceItem3 = document.getElementById("priceItem3");
var subTotal = document.getElementById('subTotal');



function increment(id) {
  var quantityInput = document.getElementById(id);
  quantityInput.value = parseInt(quantityInput.value) + 1;

  if(id === 'quantity-item-1') {
      priceItem1.innerText = `${349 * parseInt(quantityInput.value)}`;
  }
  else if(id === 'quantity-item-2') {
      priceItem2.innerText = `${599 * parseInt(quantityInput.value)}`;
  }
  else if(id === 'quantity-item-3') {
      priceItem3.innerText = `${499 * parseInt(quantityInput.value)}`;
  }

subTotal.innerText = `${parseInt(priceItem1.innerText) + parseInt(priceItem2.innerText) + parseInt(priceItem3.innerText)}`;

}

function decrement(id) {
  var quantityInput = document.getElementById(id);
  quantityInput.value = parseInt(quantityInput.value) - 1;

  if(id === 'quantity-item-1') {
    priceItem1.innerText = `${349 / parseInt(quantityInput.value)}`;
}
  else if(id === 'quantity-item-2') {
    priceItem2.innerText = `${599 / parseInt(quantityInput.value)}`;
}
  else if(id === 'quantity-item-3') {
    priceItem3.innerText = `${499 / parseInt(quantityInput.value)}`;
}

subTotal.innerText = `${parseInt(priceItem1.innerText) + parseInt(priceItem2.innerText) + parseInt(priceItem3.innerText)}`;

}

