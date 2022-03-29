export function getSumOfNumber() {
  const number = +prompt("Enter any xxx number");
  const arr = Array.from(String(number), Number);
  let sum = 0;
  arr.forEach((el) => {
    sum += el;
  });
  console.log(sum);
}
