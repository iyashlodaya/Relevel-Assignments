function redirectToCheckoutPage() {
  alert(
    "Thank You For Placing the Order Your Bill is: ₹" + subTotalValue.innerText
  );
}

var priceItem1Value = document.getElementById("priceItem1Value");
var priceItem2Value = document.getElementById("priceItem2Value");
var priceItem3Value = document.getElementById("priceItem3Value");
var subTotalValue = document.getElementById("subTotalValue");

function increment(id) {
  var quantityInput = document.getElementById(id);
  quantityInput.value = parseInt(quantityInput.value) + 1;
  var total = 0;
  if (id === "quantity-item-1" && priceItem1Value.innerText !== "0") {
    priceItem1Value.innerText = `${parseInt(priceItem1Value.innerText) + 349}`;
  } else if (id === "quantity-item-2" && priceItem2Value.innerText !== "0") {
    priceItem2Value.innerText = `${parseInt(priceItem2Value.innerText) + 599}`;
  } else if (id === "quantity-item-3" && priceItem3Value.innerText !== "0") {
    priceItem3Value.innerText = `${parseInt(priceItem3Value.innerText) + 452}`;
  }

  function calculateTotal() {
    total =
      parseInt(priceItem1Value.innerText) +
      parseInt(priceItem2Value.innerText) +
      parseInt(priceItem3Value.innerText);

    subTotalValue.innerHTML = `${total}`;
  }

  calculateTotal();
}

function decrement(id) {
  var minimumInputValue = 1;
  var quantityInput = document.getElementById(id);
  var updatedQuantity = parseInt(quantityInput.value) - 1;
  var total;
  if (updatedQuantity < minimumInputValue) {
    console.log(`UpdatedValue is negative!`);
  } else {
    quantityInput.value = updatedQuantity;
  }

  if (id === "quantity-item-1" && priceItem1Value.innerText !== "349") {
    priceItem1Value.innerText = `${parseInt(priceItem1Value.innerText) - 349}`;
  } else if (id === "quantity-item-2" && priceItem2Value.innerText !== "599") {
    priceItem2Value.innerText = `${parseInt(priceItem2Value.innerText) - 599}`;
  } else if (id === "quantity-item-3" && priceItem3Value.innerText !== "452") {
    priceItem3Value.innerText = `${parseInt(priceItem3Value.innerText) - 452}`;
  }

  function calculateTotal() {
    total =
      parseInt(priceItem1Value.innerText) +
      parseInt(priceItem2Value.innerText) +
      parseInt(priceItem3Value.innerText);

    subTotalValue.innerHTML = `${total}`;
  }

  calculateTotal();
}
