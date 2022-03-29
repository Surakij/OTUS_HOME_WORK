export function hasCircleFitSquare(circle, square) {
  return Math.sqrt(circle / Math.PI) * 2 <= Math.sqrt(square);
}
