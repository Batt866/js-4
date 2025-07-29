let students = [
  { name: "tsooj", age: 18, grade: 3, gender: "male", balance: 20000 },
  { name: "temuulen", age: 3, grade: 3, gender: "male", balance: 200 },
  { name: "jamka", age: 35, grade: 3, gender: "male", balance: 2200 },
  { name: "anar", age: 4, grade: 3, gender: "male", balance: 1000 },
  { name: "girl", age: 35, grade: 3, gender: "female", balance: 4400 },
];
function sortAge(students) {
  let sort = students.sort((student1, student2) => {
    return student1.age - student2.age;
  });
  return sort;
}
let result = sortAge(students);
console.log(result);
