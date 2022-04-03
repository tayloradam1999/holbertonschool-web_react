import { Seq, set } from 'immutable';

function printBestStudents(students) {
  // filters students by their score > 70
  // and prints to the console the student with
  // the first letter in their 'firstName' and 'lastName' properties in uppercase.
  // students - Map of students
  // returns nothing
  const mySeq = Seq(students);
  const bestStudents = mySeq.filter((student) => student.get('score') > 70);
  bestStudents.forEach((student) => {
    // change first letter to uppercase
    student.set('firstName', student.get('firstName').charAt(0).toUpperCase() + student.get('firstName').slice(1));
    student.set('lastName', student.get('lastName').charAt(0).toUpperCase() + student.get('lastName').slice(1));
    console.log(student);
  });
}

export default printBestStudents;
