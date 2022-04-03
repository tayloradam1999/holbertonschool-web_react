import { Seq } from 'immutable';

function printBestStudents(students) {
  // filters students by their score > 70
  // and prints to the console the student with
  // the first letter in their 'firstName' and 'lastName' properties in uppercase.
  //
  // students - Map of students
  //
  // returns nothing
  const mySeq = Seq(students);
  const bestStudents = mySeq.filter((student) => student.get('score') > 70);

  // console.log is formatted as a map, so we need to use .toJS()
  // to convert it to a plain object
}

export default printBestStudents;
