function getSumOfNumber (number) {
    const arr = Array.from(String(number), Number);
    let sum = 0;
    arr.forEach(function (el) {
        sum += el;
    });
    return sum;
}

module.exports = getSumOfNumber;