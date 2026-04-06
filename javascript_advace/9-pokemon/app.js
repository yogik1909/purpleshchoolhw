/*
    Сделайте запрос на https://pokeapi.co/api/v2/pokemon/ditto

После получения, получите информацию о первой его ablility по ссылке, которая приходит при первом запросе. Там найдите описание на английском и выведите в консоль:

    name: <название ability>,
    description: <описание ability>
*/


const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

const response = new XMLHttpRequest();
response.open('GET', url);
response.send();

response.addEventListener('load', () => {
    const data = JSON.parse(response.response);
    if (data.abilities.length === 0) {
        return;
    }
    const ability = data.abilities[0].ability;
    const abilityResponse = new XMLHttpRequest();
    abilityResponse.open('GET', ability.url);
    abilityResponse.send();
    abilityResponse.addEventListener('load', () => {
        const abilityData = JSON.parse(abilityResponse.response);
        for (const effect of abilityData.effect_entries) {
            if (effect.language.name === 'en') {
                console.log(`name: ${effect.short_effect}`);
                console.log(`description: ${effect.effect}`);
            }
        }
    });
});