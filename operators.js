let a = 2;
let b = 5;
let c = 10;

// Arithmetic operators:
// 1. add:
console.log("Add: ", a + b + 27);

// 2. sub:
console.log("Sub: ", b - a);

// 3. Mul:
console.log("Mul: ", a * b);

// 4. division:
console.log("Div: ", c / b);

// 5. modulo:
console.log("Mod: ", c % a);

// 6. Increment:
console.log("incr: ", ++a);
console.log("incr 2: ", a++);
console.log("a after incr: ", a);

// 7. Decrement:
console.log("decr: ", --a);
console.log("decr 2: ", a--);
console.log("a after decr: ", a);

b++; // b = 6
console.log("1: ", ++b); // 1 + 6 = 7
console.log("2: ", b--); // 7, 7 - 1 = 6
console.log("3: ", b--); // 6

// Comparison:
console.log("a=b? ", a == b);
console.log("a is not =b? ", a != b);

console.log("2='2'? ", 2 == "2");
console.log("2==='2'? ", 2 === "2");
console.log("2 is not =='2'? ", 2 !== "2");

console.log("2 < 5: ", 2 < 5); // true
console.log("2 > 5: ", 2 > 5); // false

console.log("0 == false?", 0 == false);
console.log("0 == 'false'?", 0 == "false");

// Type conversion:
console.log("hello" + 1); // hello1
console.log("hello" + true); // hellotrue
console.log(true + 3); // 4
console.log("hello" + " world"); // hello world
console.log(2 + "world"); // 2world

// Logical operators:
// AND:
console.log(2 && 4); // 4
console.log(0 && 4); // 0
console.log(true && "hello" && 4); // 4
console.log(2 < 5 && 5 < 3); // false

// OR:
console.log(2 < 5 || 5 < 3); // true

// NOT:
console.log(!"hello"); // false
console.log(!""); // true

// Assignment:
let num = 2;
let num2 = 2;
num2 += 3; // num2 = num2 + 3
console.log(num2); // 5

num2 -= 1; // num2 = num2 - 1
console.log(num2); // 4
