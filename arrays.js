const arr = [1, 2, 3, 4, 5];
const fruits = ["bananas", "apples", "oranges"];

console.log("Arr: ", arr);
console.log("Fruits: ", fruits);

// 1. Push -> Add to the array
arr.push(6);
console.log("Arr after push: ", arr); // [1, 2, 3, 4, 5, 6]

// 2. Pop -> Removes the last element
fruits.pop();
console.log("Fruits after pop: ", fruits); // ["bananas", "apples"]

// 3. shift -> shifts the values

arr.shift();
console.log("Arr after shift: ", arr);

// 4. unshift -> add to the array
fruits.unshift("oranges", "kiwi");
console.log("Fruits after unshift: ", fruits);

// 5. splice -> remove from the list(modifies the array)
// remove 4
arr.splice(2, 1);
console.log("Arr after splice: ", arr);

// 6. slice -> removes elements from array (doesnt modify the array):
const newArr = arr.slice(0, 3);
console.log("Arr after slice: ", arr);
console.log("The value of new array: ", newArr);

// newArr.forEach((e) => {
//   console.log("element:", e);
// });

// newArr.forEach(function (e) {
//   console.log("element:", e);
// });

newArr.forEach(showEl);

function showEl(e) {
  console.log("element: ", e);
}
