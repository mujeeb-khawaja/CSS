let colors=["red","green","Blue","Brown","black","grey","orange","purple"]
let box = document.querySelectorAll(".box");

for(let element of box) {
    let randomColor = Math.floor(Math.random() * colors.length);
    element.style.backgroundColor = colors[randomColor];
    element.style.colors = colors[randomColor];
};