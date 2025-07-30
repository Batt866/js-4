// removeGenders from student array function bich
let students = [
  {
    name: "boldo",
    age: 3,
    grade: 11,
    gender: "male",
    balance: 1231,
  },
  {
    name: "tsooj",
    age: 18,
    grade: 11,
    gender: "male",
    balance: 2031,
  },
  {
    name: "anar",
    age: 40,
    grade: 11,
    gender: "female",
    balance: 31,
  },
  {
    name: "temuulen",
    age: 50,
    grade: 11,
    gender: "male",
    balance: 231,
  },
];

function removeGenders(students) {
  let mapped = students.map((student) => {
    return {
      name: student.name,
      age: student.age,
      grade: student.grade,
      classCode: "3A",
    };
  });
  return mapped;
}
let resulted = removeGenders(students);
console.log(resulted);
