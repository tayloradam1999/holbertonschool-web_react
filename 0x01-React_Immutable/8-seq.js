import Immutable from 'immutable';

function printBestStudents(students) {
  // Filters students by score < 70 and console.logs their sequence
  // with the first letter of their 'firstName' and 'lastName' capitalized
  // students - Object
  // returns nothing
  const mySeq = students.filter(student => student.score < 70);
  mySeq.forEach(student => {
    student.firstName = student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1);
    student.lastName = student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1);
    console.log(student);
  });
}

export default printBestStudents;
