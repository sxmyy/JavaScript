const button = document.getElementById("button");
const text = document.getElementById("h1");
let randomNumber;

button.onclick = function(){
    randomNumber = Math.floor(Math.random() * 100);
    text.textContent = randomNumber;
}