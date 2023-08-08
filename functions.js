function addNums() {
  let a = 10;
  let b = 20;
  const sum = a + b;
  console.log("The sum is: ", sum);
}

addNums();

const sum = sumOfNums(3, 8);
console.log("Sum: ", sum);

function sumOfNums(a, b) {
  return a + b;
}

const sumValue = (a, b) => a + b;
console.log("sumValue", sumValue(5, 10));
