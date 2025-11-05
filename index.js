const func1 = () => "I am func 1";

function result(a, b, c = 7) {
  console.log(func1())            // runs (side effect)
  return a + b + c;
}

console.log(result(2, 3)); // 12