

class Character {
    constructor(race, name, language) {
        this.race = race;
        this.name = name;
        this.language = language;
    }
    speak() {
        console.log(`${this.language} ${this.name}`);
    }
}

class Orc extends Character {
    constructor(race, name, language, weapon) {
        super(race, name, language);
        this.weapon = weapon;
    }
    hit() {
        console.log(`Me orc! I have weapon: ${this.weapon}`);
    }
}

class Elf extends Character {
    constructor(race, name, language, spell) {
        super(race, name, language);
        this.spell = spell;
    }
    castSpell() {
        console.log(`Me elf! I have spell: ${this.spell}`);
    }
    speak() {
        console.log(`Dear friend, my language is ${this.language}, my name is ${this.name}, nice to meet you.`);
    }
}