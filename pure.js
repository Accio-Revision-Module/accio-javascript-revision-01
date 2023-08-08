// Pure functions:
// 1. They give same output for same input
// 2. They do not cause side effects

function sum2(a, b) {
  return a + b;
}

const ans = sum2(2, 3);
console.log(ans);

let a = 5;
let b = 10;
let sum = 0;

console.log(sum);

function add2(a, b) {
  sum = a + b;
}

sum += 10;

add2(a, b);

console.log("sum after impure function:", sum);
