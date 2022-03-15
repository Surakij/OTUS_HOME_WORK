/*Вывести в консоль сумму всех целых чисел от 50 до 100*/

function sumOfAllNumbers (from, until) {
    let counter = 0;
    for (let i = from; i <= until ; i++) {
        counter += i;
    }
    return counter;
}

module.exports = sumOfAllNumbers;