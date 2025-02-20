const buttonJS = document.getElementById("trigger");
const bodyJS = document.getElementById("body");
const titleJS = document.getElementById("title");

colors = ['#F72585', '#B5179E', '#560BAD', '#480CA8', '#3F37C9', '#4361EE', '#4895EF', "#4CC9F0"];

const randomNumber = () => {
    return Math.floor(Math.random() * 8);
}

buttonJS.addEventListener("click", (e)=>{
    e.preventDefault();
    bodyJS.style.backgroundColor = colors[randomNumber()];
    titleJS.style.color = colors[randomNumber()];
    buttonJS.style.backgroundColor = colors[randomNumber()];
})