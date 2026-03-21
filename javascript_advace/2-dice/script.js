//Сделать функцию для настольных игр. Она которая принимает тип dice, который надо бросить: d4, d6, d8, d10, d12, d16, d20 и возвращает случайное целое число на этом интервале с включёнными границами:

//d6 - возможные значения - 1, 2, 3, 4, 5, 6


function rollDice(dice) {
    if (!dice.startsWith('d')) {
        console.log('Некорректный тип броска');
        return null;
    }

    const diceNumber = parseInt(dice.slice(1));

    return Math.floor(Math.random() * diceNumber) + 1;
}


console.log(rollDice('d6'));
console.log(rollDice('d20'));