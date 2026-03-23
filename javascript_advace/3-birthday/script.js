/*
Сделать функцию валидации возраста. На вход передаётся строка даты рождения пользователя вида “2022-01-01”.

Необходимо вывести true, если ему больше 14 лет и false, если меньше
 */

function validateAge(birthday) {
    const today = new Date();
    const birthDate = new Date(birthday);
    const age = today.getFullYear() - birthDate.getFullYear() - (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate()) ? 1 : 0);
    return age > 14;
}

console.log(validateAge('2022-01-01'));
console.log(validateAge('2010-01-01'));
console.log(validateAge('2026-03-23'));