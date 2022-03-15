function hasCircleFitSquare(circle, square) {
    return Math.sqrt(circle / Math.PI) * 2 <= Math.sqrt(square);

}

console.log(hasCircleFitSquare(50, 50))
module.exports = hasCircleFitSquare;
