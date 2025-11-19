let a = prompt("Enter first number:");
let b = prompt("Enter second number:");

if(Number.isNaN(a) || Number.isNaN(b)) {
    throw SyntaxError("Input values must be numbers");
}
