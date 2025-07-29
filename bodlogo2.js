//gender

let students = [
  { name: "tsooj", age: 18, grade: 3, gender: "male", balance: 20000 },
  { name: "temuulen", age: 3, grade: 3, gender: "male", balance: 200 },
  { name: "jamka", age: 35, grade: 3, gender: "female", balance: 2200 },
  { name: "anar", age: 4, grade: 3, gender: "male", balance: 1000 },
  { name: "girl", age: 35, grade: 3, gender: "female", balance: 4400 },
];
function findAdultStudents(students, gender) {
  let filtered = students.filter((student) => {
    return student.gender == gender;
  });
  return filtered;
}
let result = findAdultStudents(students, "male");
console.log(result);
