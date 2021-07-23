interface MajorCredits {
  brand: 'big';
  credits: number;
}

interface MinorCredits {
  brand: 'small';
  credits: number;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MinorCredits) {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

function sumMinorCredits(subject1: MajorCredits, subject2: MinorCredits) {
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}
