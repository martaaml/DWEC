/**
 * @name getBiggestNumber
 * @description Devuelve el número más grande de un array
 * 
 * @param {number[]} numbers - Un array de números
 * @returns {Number} El número más grande del arrray {numbers}
 *
 * @example
 *  getBiggestNumber([3, 8, 2, 1, 10]) // returns 10
 */

function getBiggestNumber(numbers) {
    
    let bigNumber = Number.MIN_VALUE;
    for (let number = 0; number < numbers.length; number++) {
        if (numbers[number] >= bigNumber) {
            bigNumber = numbers[number];
        }

    }
    return bigNumber;
}
console.log(getBiggestNumber([3, 8, 2, 1, 10]))