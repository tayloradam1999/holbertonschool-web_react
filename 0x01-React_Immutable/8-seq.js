import { seq } from 'Immutable';

function printBestStudents(students) {
  // Filters students by score < 70 and console.logs their sequence
  // with the first letter of their 'firstName' and 'lastName' capitalized
  // students - Object
  // returns nothing
  const myObj = seq(students);
  const myList = myObj.filter(student => student.get('score') < 70);
  myList.forEach(student => {
    student.firstName = student.charAt(0).toUpperCase() + student.slice(1);
    student.lastName = student.charAt(0).toUpperCase() + student.slice(1);
    console.log(student);
  });
}

export default printBestStudents;
