const button = document.getElementById("trigger");
const body = document.getElementById("body");
const title = document.getElementById("title");

let colors = ['#F72585', '#B5179E', '#560BAD', '#480CA8', '#3F37C9', '#4361EE', '#4895EF', "#4CC9F0", "#FF5733", "#FFBD33", "#33FF57", "#33FFF5", "#5733FF", "#FF33A8", "#FF3380", "#A833FF"];

const randomNumber = () => {      // Número aleatorio 
    return Math.floor(Math.random() * 16);
}

button.addEventListener("click", (evento)=>{
    evento.preventDefault();
    body.style.backgroundColor = colors[randomNumber()];
    title.style.color = colors[randomNumber()];
    button.style.backgroundColor = colors[randomNumber()];
})