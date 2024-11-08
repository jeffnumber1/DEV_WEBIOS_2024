//array -- Metodo ForEach
// let frutas = [ "Uva", "Morango", "Maçã", "Coco", "Blueberry", "Pitaya", "Laranja", "Pera"]

// frutas.forEach(Percorrer)

//                 //conteudo/indice
// function Percorrer(valor, indice){
//     console.log(valor);
//     console.log(indice);
// }

// // for(i = 0; i <= frutas.length; i++){
//     console.log(frutas[i]);
//     console.log(i)
// }

console.clear

//Math.currently / Math.max (maior valor) / Math.min (menor valor) / Math.sqrt
let numeros = [23, 55, 162, 79, 61, 42]

//Trazer um novo arrray atualizado com a raiz quadrada de cada numero do array

let numerosDois = numeros.map(Math.sqrt)
let maiorNumero = Math.max.apply(Math, numeros)
let menorNumero = Math.min.apply(Math, numeros)

console.log(maiorNumero + " " + menorNumero);

let filtraNumero = numeros.filter((valor) => {
    return valor >= 16
})

//criando um novo array onde ira conter apenas os número maior ou igual? 

console.log(filtraNumero)

console.clear()

// trabalhando com array de objeto

let tarefa = [
    {   
        tarefa: "Dormir",
        isFeita: true   
    },
    {
        tarefa: "Limpar",
        isFeita: false
    },
    {
        tarefa: "Torcer",
        isFeita: true
    }

]

//find

let retornaTrue = tarefa.find((item) =>{
    return item.isFeita === true
})

console.log(retornaTrue)
