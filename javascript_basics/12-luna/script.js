/*
Написать функцию проверки номера карты алгоритмом Луна. 
В функции передаётся карта: 4561-2612-1234-5464, 
а функция возвращает true, если карта проходит алгоритм и false, если нет.
*/

function checkCardNumber(cardNumber) {
    const cardNumberClearArray = cardNumber.replaceAll('-', '').split('');
    let sum = 0;

    cardNumberClearArray.forEach((digit, index) => {
        let curDigit = parseInt(digit);
        if (index % 2 === 0) {
            curDigit *= 2;
            if (curDigit > 9) {
                curDigit -= 9;
            }
        }
        sum += curDigit;
    });

    return sum % 10 === 0;
}

console.log(checkCardNumber('4561-2612-1234-5464'));