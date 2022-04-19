export function getArray() {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return arr;
}

export function getSumArr(arr) {
  let sum = 0;
  arr.forEach((el) => {
    sum += el;
  });
  console.log(sum);
}

export function getDoubleArray(arr) {
  return arr.map((num) => num * 2);
}

export function getMaxAndMinValueArr(arr) {
  const minValue = Math.min.apply(null, arr);
  const maxValue = Math.max.apply(null, arr);
  console.log(minValue, maxValue);
}
