/*
 Задание:
Изучив принцип работы с промисами, ваша задача — улучшить код из предыдущего домашнего задания.
В предыдущем задании вы получали информацию о покемоне, затем получали данные о его первом умении (нулевая обилика) и, наконец, по ссылке из этой информации извлекали описание умения на английском языке.
В отличие от предыдущего подхода, где использовались колбэки, сейчас необходимо реализовать этот же функционал, используя цепочки промисов.
Обратите особое внимание на обработку возможных ошибок, например, если сервер не ответит. Улучшенный подход должен предусматривать корректную обработку исключительных ситуаций.
*/


const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

const data = fetch(url)
    .then(response => response.json())
    .then(data => {
        const abilityUrl = data.abilities[0].ability.url;
        return fetch(abilityUrl).then(response => response.json());
    })
    .then(data => {
        for (const effect of data.effect_entries) {
            if (effect.language.name === 'en') {
                console.log(`name: ${effect.short_effect}`);
                console.log(`description: ${effect.effect}`);
            }
        }
    })
    .catch(error => {
        console.error(error);
    });


// const response = new XMLHttpRequest();
// response.open('GET', url);
// response.send();

// response.addEventListener('load', () => {
//     const data = JSON.parse(response.response);
//     if (data.abilities.length === 0) {
//         return;
//     }
//     const ability = data.abilities[0].ability;
//     const abilityResponse = new XMLHttpRequest();
//     abilityResponse.open('GET', ability.url);
//     abilityResponse.send();
//     abilityResponse.addEventListener('load', () => {
//         const abilityData = JSON.parse(abilityResponse.response);
//         for (const effect of abilityData.effect_entries) {
//             if (effect.language.name === 'en') {
//                 console.log(`name: ${effect.short_effect}`);
//                 console.log(`description: ${effect.effect}`);
//             }
//         }
//     });
// });

