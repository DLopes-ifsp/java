console.log("1. Completar a função para somar dois números")
function somar(a, b) {
return a + b;
}
console.log(somar(5, 3))
console.log("2. Criar uma função que retorne 'Par' ou 'Ímpar'")
function parOuImpar(numero) {
return numero % 2 === 0 ? 'Par' : 'Ímpar';
}
console.log(parOuImpar(4))
console.log("3. Escreva um programa que converta metros em centímetros e milímetros").
function converterMetros(metros) {
    const centimetros = metros * 100
    const milimetros = metros * 1000
    return `Centímetros: ${centimetros}, Milímetros: ${milimetros}`;
  }
  
  console.log(converterMetros(5))
console.log("4.Dado o array const frutas = ['maçã', 'banana'];, adicione as frutas 'laranja' e 'uva' ao final do array, usando método.")
const frutas = ['maçã', 'banana']
frutas.push('laranja', 'uva')
console.log(frutas)
console.log("5.Considere o array const numeros = [1, 2, 3, 4, 5];. Remova o último elemento do array e armazene-o em uma variável chamada ultimoNumero, usando método.")
const numeros = [1, 2, 3, 4, 5]
const ultimoNumero = numeros.pop()
console.log(ultimoNumero)
console.log(numeros)
console.log("6. Dado o array const cores = ['vermelho', 'azul', 'verde'];, remova o primeiro elemento e armazene-o em uma variável chamada primeiraCor, usando método.")
const cores = ['vermelho', 'azul', 'verde']
const primeiraCor = cores.shift()
console.log(primeiraCor)
console.log(cores)

console.log("7.Com o array const animais = ['cachorro', 'gato'];, adicione os animais 'elefante' e 'leão' no início do array, usando método.")
const animais = ['cachorro', 'gato']
animais.unshift('elefante', 'leão')
console.log(animais)

console.log("8.Dado o array const numeros = [10, 20, 30, 40, 50];, remova os dois primeiros elementos e, em seguida, adicione os números 5 e 15 nas primeiras posições, usando método.")
const numeros = [10, 20, 30, 40, 50];
numeros.splice(0, 2)
numeros.unshift(5, 15)
console.log(numeros)

console.log("9. Considere o array const letras = ['a', 'b', 'c', 'd', 'e'];. Crie um novo array contendo apenas os elementos 'b', 'c' e 'd', usando método")
const letras = ['a', 'b', 'c', 'd', 'e']
const letrasSelecionadas = letras.slice(1, 4)
console.log(letrasSelecionadas)

console.log("10. Dado os arrays const array1 = [1, 2, 3]; e const array2 = [4, 5, 6]; crie um novo array que combine os elementos de ambos, usando o método concat")
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const arrayCombinado = array1.concat(array2)
console.log(arrayCombinado)

console.log("11. Criar uma função que recebe um nome e retorna uma saudação personalizada")
function saudacao(nome) {
    function saudacao(nome) {
        return `Olá, ${nome}!`;
      }
      
      console.log(saudacao("Carlos"))
      console.log(saudacao("Ana"))
      
}
console.log("12. Qual a diferença entre var, let e const?")
console.log("13. O que acontece quando você tenta acessar uma variável que ainda não foi definida?")
console.log("Quando você tenta acessar uma variável que não foi definida, o JavaScript lançará um erro de referência (ReferenceError).")
console.log("14. Como funciona o typeof? Escreva um código usando o typeof")
console.log("O typeof é um operador usado para verificar o tipo de uma variável ou valor. Ele retorna uma string indicando o tipo do operando.
    "Ex:")
    let numero = 42;
console.log(typeof numero)

let texto = "Olá";
console.log(typeof texto)

let a = true;
console.log(typeof a)
