export function getAverageOdd() {
  const number = +prompt(
    "Enter every number and get average of all odd number :"
  );
  let counter = 0;
  let sumOdd = 0;
  for (let i = 1; i <= number; i += 2) {
    sumOdd += i;
    counter++;
  }
  console.log(sumOdd / counter);
}
