import { Aluno } from "./Aluno";
import { Professor } from "./Professor";

const marcelo = new Professor({
    nome: 'Marcelo',
    email: 'marcelo@email.com',
    telefone: '123456789',
    senha: '123abc'
})

const andrea = new Aluno({
    nome: 'Andrea',
    email: 'andrea@email.com',
    telefone: '123456780',
    senha: '123abc'
})

console.log(marcelo.autenticar('123abc'))
marcelo.lancarNota(andrea, 9)
marcelo.lancarNota(andrea, 7)
console.log(andrea.obterMedia())
