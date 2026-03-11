/*
Написать функцию, которая принимает объект query параметров и возвращает строку для вставки:

{
    search: ‘Вася’,
    take: 10,
}

// search=Вася&take=10

*/


function getQueryString(query) {
    const addProp = [];
    for (const [key, value] of Object.entries(query)) {
        addProp.push(`${key}=${value}`);
    }
    return addProp.join('&');
}