const student = {
  rollNo: 1,
  name: "Anmol",
  marks: 100,
};

student.marks = 95;

console.log(student);

const newStudent = { ...student, name: "Aman" };
console.log(newStudent);

console.log(Object.keys(student));
console.log(Object.values(student));

const arr = [1, 2, 3, 4, 5];
const newArr = [...arr];

newArr.push(6);

console.log("Arr: ", arr);
console.log("new Arr: ", newArr);

const obj1 = {
  1: "1",
  2: "2",
  3: "3",
};

const obj2 = { ...obj1 };

obj2["2"] = "4";

console.log(obj1);
console.log(obj2);
