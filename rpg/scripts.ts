import { Arqueiro } from "./Arqueiro";
import { Mago } from "./Mago";

const jessica = new Mago('Jéssica')
const leandro = new Arqueiro('Leandro')

console.log(jessica)
jessica.andar()
jessica.andar()
jessica.andar()
console.log(jessica.velocidade)
console.log(jessica.usarMagia())
console.log(jessica.usarMagia())
console.log(jessica.usarMagia())
console.log(jessica.usarMagia())
console.log(jessica.usarMagia())
console.log(jessica.usarMagia())


console.log(leandro)
leandro.construirFlechas()
console.log(leandro.flechas)



