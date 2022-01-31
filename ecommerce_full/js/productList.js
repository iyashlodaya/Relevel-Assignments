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
