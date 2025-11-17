function randomColor() {
    let value1 = Math.ceil(0+Math.random()*255);
    let value2 = Math.ceil(0+Math.random()*255);
    let value3 = Math.ceil(0+Math.random()*255);
    return `rgb(${value1}, ${value2}, ${value3})`;
}

let a = setInterval(() => {
    document.querySelector('.container').style.backgroundColor = randomColor();
}, 1000);