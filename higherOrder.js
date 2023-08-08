const arr = [1, 2, 3, 4, 5, 6, 7];

function showElements(e) {
  console.log(e);
}

arr.forEach(showElements);

const divBy2 = arr.filter((e) => e % 2 == 0);

console.log(divBy2);

const sum = arr.reduce((i, f) => i + f, 0);
console.log(sum);

setTimeout(function () {
  console.log("Timeout Works!");
}, 3000);
