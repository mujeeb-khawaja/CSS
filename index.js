// faulty calculator


function randomInt() {
  return Math.floor(Math.random() * 101);
}

function faultyCalculator(num1, num2, operator) {
  if (operator === '+') {
    return randomInt() < 10 ? num1 - num2 : num1 + num2;
  }
  else if (operator === '-') {
    return num1 - num2;
    } else if (operator === '*') {
    return num1 * num2;
    } else if (operator === '/') {
    return num1 / num2;
    } else {
    return "Invalid operator";
    }
}

const num1 = 50;
const num2 = 10;
const operator = '+'; // Try '+', '-', '*', or '/'

console.log(`The result of ${num1} ${operator} ${num2} is: ${faultyCalculator(num1, num2, operator)}`);
console.log(`Number returned from randomInt(): ${randomInt()}`);