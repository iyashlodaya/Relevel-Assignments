document.getElementById("loginBtn").addEventListener("click", validate);

function validate() {
  var emailInput = document.getElementById("inputEmail");
  var passwordInput = document.getElementById("inputPassword");

  console.log(`email input ${emailInput.value}`);
  console.log(`passwordInput ${passwordInput.value}`);

  if (emailInput.value.trim().length === 0) {
    alert("Please Enter Email");
    emailInput.focus();
  } else if (passwordInput.value.trim().length === 0) {
    alert("Please Enter Password");
    passwordInput.focus();
  } else if (passwordInput.value.length != 9) {
    alert("Password Must Be greater than 8 Characters!");
    passwordInput.focus();
  } else {
    alert("Login Successful: Welcome " + emailInput.value);
    window.open("homepage.html", "_self");
  }
}

function openLinkedIn() {
    window.open('https://www.linkedin.com/');
}

function openFacebook() {
    window.open('https://www.facebook.com/');
}

document.getElementById('linkedinBtn').addEventListener('click', openLinkedIn);
document.getElementById('facebookBtn').addEventListener('click', openFacebook);