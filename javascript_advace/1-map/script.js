// Сделать с помощью Set уникализацию массива объектов:
// Для этой операции потребуется map и find

const people = [
    { id: 1, name: 'Вася' },
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
]

const unique = [...new Set(people.map(o => o.id))].map(id => people.find(o => o.id === id));

console.log(unique);