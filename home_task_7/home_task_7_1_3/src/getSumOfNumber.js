export function getSumOfNumber(number) {
  const arr = Array.from(String(number), Number);
  let sum = 0;
  arr.forEach((el) => {
    sum += el;
  });
  return sum;
}
