let ages = [12, 14, 314, 25, 7, 5];
for (i = 0; i < ages.length; i++) {
  console.log(ages[i]);
}
let duu = ages.map((a) => {
  console.log(a);
});
console.log(duu);

students = [
  {
    name: "boldo",
    age: 20,
    grade: 11,
    gender: "male",
  },
  {
    name: "tsooj",
    age: 10,
    grade: 11,
    gender: "male",
  },
  {
    name: "neg gar",
    age: 23,
    grade: 11,
    gender: "female",
  },
];
let newStudents = students.map((student) => {
  return {
    name: student.name,
    age: student.age,
    grade: student.grade + 1,
  };
});
console.log(students);
console.log(newStudents);

//filter
const filtered = ages.filter((age) => {
  return age % 2 == 0;
});
console.log(ages);
console.log(filtered);

let students = [
  { name: "tsooj", age: 18, grade: 3, gender: "male", balance: 20000 },
  { name: "temuulen", age: 3, grade: 3, gender: "male", balance: 200 },
  { name: "jamka", age: 35, grade: 3, gender: "male", balance: 2200 },
  { name: "anar", age: 4, grade: 3, gender: "male", balance: 1000 },
  { name: "girl", age: 35, grade: 3, gender: "female", balance: 4400 },
];
const filtered2 = students.filter((student) => {
  return student.age >= 18;
});
console.log(students);
console.log(filtered2);
