import Immutable from 'immutable';

function printBestStudents(students) {
  // filters students by their score > 70
  // and prints to the console the student with
  // the first letter in their 'firstName' and 'lastName' properties in uppercase.
  //
  // students - Map of students
  //
  // returns nothing
  const mySeq = Immutable.Seq(students);
  console.log(mySeq);

  const filtered = mySeq.filter((student) => {
    return student.score > 70;
  });

  const JSObject = filtered.toJS();

  for (let i = 0; i < JSObject.length; i = i + 1) {
    const student = JSObject[i];
    student.firstName = student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1);
    student.lastName = student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1);
    return student;
  }

  console.log(JSObject);
}

printBestStudents(grades);
