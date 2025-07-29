// Bodlogo #4
// neg too ogonguut tuhain toonoos ih balanactei surgchdiig yalgaj ogoh function bich

let students = [
  { name: "tsooj", age: 18, grade: 3, gender: "male", balance: 20000 },
  { name: "temuulen", age: 3, grade: 3, gender: "male", balance: 200 },
  { name: "jamka", age: 35, grade: 3, gender: "male", balance: 2200 },
  { name: "anar", age: 4, grade: 3, gender: "male", balance: 1000 },
  { name: "girl", age: 35, grade: 3, gender: "female", balance: 4400 },
];
function findAdultBalance(students, balance) {
  let filtered = students.filter((student) => {
    return student.balance == balance;
  });
  return filtered;
}
let result = findAdultBalance(students, 2000);
console.log(result);
