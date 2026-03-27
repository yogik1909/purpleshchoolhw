/*
    Создать базовый класс Персонажа с параметрами: раса, имя, язык и метод - говорить (выводит язык и имя в консоль).

    Создать класс Орка, который наследуется от Персонажа, у которого есть оружие и который имеет метод - удара.

    Создать класс Эльфа, который наследуется от Персонажа, у которого есть типа заклинаний и метод – создать заклинание.

    Использовать прототипное наследование. Все методы просто выводят что-то в консоль.    
*/

function Character(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
}

Character.prototype.speak = function () {
    console.log(`${this.language} ${this.name}`);
};

function Orc(race, name, language, weapon) {
    Character.call(this, race, name, language);
    this.weapon = weapon;
}

Orc.prototype = Object.create(Character);
Orc.prototype.constructor = Orc;
Orc.prototype.hit = function () {
    console.log(`${this.weapon} ${this.name}`);
};

function Elf(race, name, language, spell) {
    Character.call(this, race, name, language);
    this.spell = spell;
}

Elf.prototype = Object.create(Character);
Elf.prototype.constructor = Elf;
Elf.prototype.castSpell = function () {
    console.log(`${this.spell} ${this.name}`);
};