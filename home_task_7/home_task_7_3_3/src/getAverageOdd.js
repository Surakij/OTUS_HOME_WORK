export function getAverageOdd(number) {
  let counter = 0; let
    sumOdd = 0;
  for (let i = 1; i <= number; i += 2) {
    sumOdd += i;
    counter++;
  }
  return sumOdd / counter;
}
