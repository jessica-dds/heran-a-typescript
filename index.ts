import { Gerente } from "./Gerente";
import { Programador } from "./Programador";
import { Vendedor } from "./Vendedor";

const jessica = new Programador('Jéssica', 900000, ['Javascript', 'php'])
const guilherme = new Gerente('Guilherme', 800000, '12345')
const joaquim = new Vendedor('Joaquim', 800000, 120000)

//console.log(jessica, guilherme, joaquim)
//console.log(joaquim.calcularSalario());
console.log(guilherme.validarSenha('12345'));
