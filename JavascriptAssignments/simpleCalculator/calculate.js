function add() {
  const firstInput = parseInt(document.getElementById("firstInput").value);
  const secondInput = parseInt(document.getElementById("secondInput").value);
  let result = firstInput + secondInput;
  document.getElementById("result").innerText = result;
}
function subctract() {
  const firstInput = parseInt(document.getElementById("firstInput").value);
  const secondInput = parseInt(document.getElementById("secondInput").value);
  let result = firstInput - secondInput;
  document.getElementById("result").innerText = result;
}
function multiply() {
  const firstInput = parseInt(document.getElementById("firstInput").value);
  const secondInput = parseInt(document.getElementById("secondInput").value);
  let result = firstInput * secondInput;
  document.getElementById("result").innerText = result;
}
function divide() {
  const firstInput = parseInt(document.getElementById("firstInput").value);
  const secondInput = parseInt(document.getElementById("secondInput").value);

  if (secondInput === 0) {
    alert("Cannot Divide By Zero!");
  } else {
    let result = firstInput / secondInput;
    document.getElementById("result").innerText = result;
  }
}

function reset() {
    document.getElementById("firstInput").value = '';
    document.getElementById("secondInput").value = ''; 
}