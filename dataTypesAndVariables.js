let num = 23;
let isIntructor = true;
const PI = 3.14;
let name = "Jayesh"; // global scope

console.log("Language>>", language);
var language = "english";

function hello() {
  name = "Aman";
  //   PI = 2;
  let greeting = "hi"; //local scope
  console.log(greeting, name);
  console.log(PI);
}

hello();
console.log(name);
