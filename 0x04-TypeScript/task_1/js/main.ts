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
