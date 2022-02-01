const loginBtn = document.getElementById("loginBtn");
const emailInput = document.getElementById("inputEmail");
const passwordInput = document.getElementById("inputPassword");
const errorAlert = document.getElementById("error-alert");
const successMessageContainer = document.getElementById(
  "success-msg-container"
);

function redirectToProductsListPage() {
  let email = emailInput.value;
  let password = passwordInput.value;

  if (email === "" && password === "") {
    errorAlert.style.display = "block";
    errorAlert.innerText = `Please Enter Email or Password`;
    emailInput.focus();
    return;
  } else if (email === "") {
    errorAlert.style.display = "block";
    errorAlert.innerText = `Please Enter Email Address!`;
    emailInput.focus();
    return;
  } else if (password === "") {
    errorAlert.style.display = "block";
    errorAlert.innerText = `Please Enter Password`;
    passwordInput.focus();
    return;
  } else {
    errorAlert.style.display = "none";
  }

  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  if (email && password) {
    successMessageContainer.style.display = "block";
    successMessageContainer.children[1].innerText = "Login Successful!";

    setTimeout(() => {
      window.location.href = "../html/productList.html";
    }, 4950);
  }
}
