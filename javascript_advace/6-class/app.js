
/*
    Создайте класс Car у которого есть марка, модель и пробег (все свойства приватные, задаются в конструкторе). 

        Сделайте для него возможность менять пробег через get и set.
        Добавьте метод info, который выводит в консоль марку, модели и пробег.
*/


class Car {
    #brand;
    #model;
    #mileage;
    constructor(brand, model, mileage) {
        this.#brand = brand;
        this.#model = model;
        this.#mileage = mileage;
    }
    

    get mileage() {
        return this.#mileage;
    }

    set mileage(mileage) {
        this.#mileage = mileage;
    }   

    info() {
        console.log(`${this.#brand} ${this.#model} ${this.#mileage}`);
    }
}

const car = new Car('Toyota', 'Corolla', 100000);
car.info();
car.mileage = 100001;
car.info();