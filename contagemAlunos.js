// let index = 0 - Declaração da variavel contadora
// index < array.length - Verificação da quantidade / Quantas vezes irá repetir
// index++ - Incremento / Irá adicionar a cada volta
// length == Comprimento
//for (let index = 0; index < array.length; index++) {

//}
 
// forEach - Especifico para listas/array
// array.forEach(element => {
    
//});


// while - Estrutura de repetição condicional e verifica a condição ANTES da execução
// while (condition) {
    
// }


// do while - Estrutura de repetição condicional verifica a condição DEPOIS da execução
// ele executará pelo menos 1 vez
// do {
    
// } while (10 < 10);


// texto - String - precisa estar entre "aspas"
// numeros inteiros - inteiros
// numeros decimais - float 0,0000000
// numeros decimais - double 0,0000000000000000
// bool ou boolean - 0 ou 1 / false ou true


// let quantidade = 5
// for (let contador = 0; contador < quantidade; contador++) {
//     //  console.log("o numero da volta é " + contador)
//      console.log(`O numero da volta é ${contador + 1}`)
//  }


// let contador = 0
// while (contador < quantidade) {
  
    // console.log("ola")

    // contador++
// }




//Se o numero for par, escreva "par" e o numero correspondente
//Se o numero for impar, excreva "impar" e o numero correspondente
//Se o numero for zero, escreva "zero"

//% - pega o resto da divisão

let numeroDeAlunos = ["a", "b", "c", "d", "e"]

for (let contador = 0; contador < numeroDeAlunos.length; contador++) {
    
    if (contador == 0) {
        console.log("Zero")
    
    }else if (contador % 2 == 0) {
        console.log(`o numero ${contador} é par`)
    
    }else{
        console.log(`o numero ${contador} é Impar`)
    }  
}


//numeroDeAlunos.forEach(cadaItem => {
//    console.log(cadaItem)
//});