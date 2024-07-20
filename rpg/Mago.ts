import { Personagem } from "./Personagem";

export class Mago extends Personagem {
    public magia: number

    constructor(nome: string) {
        super(nome)
        this.magia = 5
    }

    usarMagia() {
        if (this.magia <= 0) {
            return 'Magia indisponível.'
        }

        this.magia -= 1
        return 'Magia usada.'
    }

    criarMagia() {
        this.magia += 1
    }
}