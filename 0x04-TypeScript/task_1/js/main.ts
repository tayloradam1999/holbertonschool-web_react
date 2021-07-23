interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

export default function printTeracher({firstName, lastName}: Teacher) {
  return (`${firstName.slice(0, 1)}. ${lastName})`);
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

interface StudentInterface {
    firstName: string;
    lastName: string;
}

interface StudentConstructor {
    new (firstName: string, lastName: string): Student;
}

class StudentClass implements StudentInterface {
  constructor(firstName: string, lastName: string) {
    }
    workOnHomework() {
      return 'Currently Working';
    }
    displayName() {
      return this.firstName;
    }
}
