import { Seq, Map } from 'immutable';

function printBestStudents(students) {
  // filters students by their score > 70
  // and prints to the console the student with
  // the first letter in their 'firstName' and 'lastName' properties in uppercase.
  // students - Map of students
  // returns nothing
  const mySeq = Seq(students);
  const bestStudents = mySeq.filter((student) => student.get('score') > 70);

  const myMap = Map(bestStudents);

  myMap.forEach((student) => {
    student.set('firstName', student.get('firstName').charAt(0).toUpperCase());
    student.set('lastName', student.get('lastName').charAt(0).toUpperCase());
  })

  console.log(myMap.toJS());
}

export default printBestStudents;
