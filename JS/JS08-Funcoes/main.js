// variaveis >>> var nome;
//funcoes >>> function NomeAluno(){}

//funções
function Contador(){
    //criar uma verificação de se o número digitado é par ou impar
let imparPar = 7;
let numero = 1;

    //Se for impar então vamos apresentar na tela todos os número impares de 1 até 50
    if(imparPar % 2 == 1){
        console.log("Esse número é impar")
    for(numero; numero <= 50; numero++){
    if(numero % 2 == 1){
        console.log(numero);
    }
    };
    }else if(imparPar % 2 == 0){
    //Senão (se for par) vamos aprsentar na tela todos os número pares de 1 até 50
        console.log('Esse número é par')
    for(numero; numero <= 50; numero++){
    if(numero % 2 == 0){
        console.log(numero);
    }
    }
    }
}

// OBS: funcoes são sempre chamadas acompanhadas com parenteses
        console.log(Contador());
        console.clear()
// Arrow Function

let BoasVindas = () => {
    return 'Welcome Sofrendo com JS / Com TCC'
}

        console.log(BoasVindas())

//Os parenteses servem para trazer valores que estão fora da função para dentro dela assim  conseguindo trabalhar com varios tipos de valores informados pelo usuario 

let Soma = (num1 = 7.646, num2 = 2.351) => {
    return num1 + num2;
}

        console.log(Soma())

        console.clear()

function Clique(){
    let cliques = 0;

    return cliques++;
}
        console.log(Clique())

    let ChamaPopUp = () =>{
        alert('Parabéns você me chamou, descompensado!')
    }
    let PasseMouse = () =>{
        alert('Olá World')}