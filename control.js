const name = "Jayesh";
const age = 18;

// IF - ELSE

// if above the age of 18
if (age >= 18) {
  console.log("You are above the age of 18");
} else {
  console.log("Not above 18");
}

// LOOPS
let i;
for (i = 0; i < age; i++) {
  console.log("number: ", i);
}

// number: 0
// number: 1
// number: 2
// number: 3
// ....
// number: 16
// number: 17

console.log("Value of i after loop: ", i); // 18

let j = 23;
// While loop:
while (j > 18) {
  console.log("J: ", j);
  j--;
}

console.log("Value of j after the loop: ", j); // 18

let k = 5;

// Do while loop:
do {
  console.log("K: ", k);
  k++;
} while (k < 5);

console.log("Value of k after the loop: ", k); // 6

// SWITCH:
const choice = "a";

switch (choice) {
  case "a":
    console.log("A was enetered");
    break;
  case "b":
    console.log("A was not entered. B was");
    break;
  default:
    console.log("Invlaid input");
}

// if (choice == "a") {
//   console.log("A was eneterd");
// } else {
//   if (choice == "b") {
//     console.log("A was not entered. B was");
//   } else {
//     console.log("Invlaid input");
//   }
// }
