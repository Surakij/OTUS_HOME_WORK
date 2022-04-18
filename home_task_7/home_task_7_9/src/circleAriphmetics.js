// 1.Даны длины трёх сторон треугольника. Определить,
//     является ли треугольник прямоугольным.
export function triangleChecking(a, b, c) {
  const aSquared = a ** 2;
  const bSquared = b ** 2;
  const cSquared = c ** 2;

  const resC = a ** 2 + b ** 2;
  const resB = a ** 2 + c ** 2;
  const resA = c ** 2 + b ** 2;

  return resC === cSquared || resB === bSquared || resA === aSquared;
}

// 2.Пользователь вводит число R. Написать программу,
// которая выведет в консоль длину окружности и
// площадь круга с радиусом R.
export function getCircleLengthAndSquare() {
  const r = +prompt("введите число радиуса: ");
  const length = Math.floor(2 * Math.PI * r);
  const square = Math.floor(2 * Math.PI * r ** 2);

  console.log(length, square);
}
