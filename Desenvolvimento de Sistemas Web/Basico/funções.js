//funções são blocos reutilizaveis
//paramentros com retorno

let numero1 = 4
let numero2 = 6

function calculosoma (a,b) {
    let resultado = a + b
    return resultado
}

console.log(calculosoma(numero1, numero2))
console.log(calculosoma(10,6))

// funções sem retorno

function maiordeidade () {
    if (idade >= 18) {
        let deMaior = true
        console.log("Maior de Idade")
    }
    else {
        let deMaior = false
        console.log("Menor de Idade")
    
    }
}
