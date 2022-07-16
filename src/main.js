import "./scss/main.scss";
const app = document.getElementById("app");

const node = document.createElement("h1");

node.innerHTML = "Hello World";
node.classList.add("red");

app.appendChild(node);