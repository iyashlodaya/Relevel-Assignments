function validate () {
    const password = '12345678';
    const enteredPassword = document.getElementById('passwordInput').value;
    if (enteredPassword === password) {
        alert(`Login Successful!`);
    }
    else {
        alert(`Incorrect Password`);
    }
}