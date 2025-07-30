// classCode gesen field nemeh function bich
// eg: addClassCodeToStudents(students,"3A") => [{name: "boldo",age: 3,grade: 11,gender: "male",balance: 1231,classCode:"3A"},...]

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
function addclasscode(students, classCode) {
  let mapped = students.map((student) => {
    return {
      name: student.name,
      age: student.age,
      gender: student.gender,
      grade: student.grade,
      classCode: "3A",
    };
  });
  return mapped;
}
let resulted = addclasscode(students);
console.log(resulted);
