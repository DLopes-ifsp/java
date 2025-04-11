//conversão de tipos

console.log("ano" + 2025) //String com Inteiro, fara uma string
console.log("Alo" + "Administrador") //string com string fara uma string
console.log( 20 + 2000) //inteiro com inteiro fara um inteiro

//conversão explicita
console.log(parseInt('3') + parseInt('5')) //convertendo uma string para inteiro

//conversão implicita
console.log("16"/"2") //Funciona com operações complexas
console.log("20" - "20") // mas com as simples ele apenas altera a string


// Tipos de dados
let cliente = 'Mariana'
let idade = 18
let pago = true

console.log(typeof cliente) // Mostra o tipo de dado
console.log(typeof idade)
console.log(typeof pago)

cliente = "rafael" // é possivel reescrever um dado

const nome = "Douglas" // Não pode ser alterado
nome = "Lopes" // ao tentar reatribuir um nome a uma constante, o console dará erro