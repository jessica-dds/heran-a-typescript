import { Animal, Mamifero } from "./Mamiferos";

export class Baleia extends Mamifero {
    constructor(animal: Animal) {
        super(animal)
    }

    nadar() {
        return `Baleia nadando.`
    }
}