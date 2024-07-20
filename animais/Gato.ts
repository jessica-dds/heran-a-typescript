import { Animal, Mamifero } from "./Mamiferos";

export class Gato extends Mamifero {
    constructor(animal: Animal) {
        super(animal)
    }

    miar() {
        return `Gato miando.`
    }

    andar() {
        return `Animal andando.`
    }

}