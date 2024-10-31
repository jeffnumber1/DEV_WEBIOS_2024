// aray de objetos 

// retornar objeto
// console.log(aluno); 

// //retornar apenas o nome
// console.log(`O nome do aluno é ${aluno.nome}`);

// //retornar apenas o campo isChora
// console.log(`O aluno ${aluno.nome} chora damais? R:${aluno.isChora}`);

// //retornar apenas a nota
// console.log(aluno.notas[2]);

console.clear()

let IOS = [
{
    nome: 'Jeffrey',
    idade: 21,
    altura: 1.76,
    isCracha: false,
    isCamisa: true,
    isPaciencia: false,
    isChora: true,
    cor: 'preto',
    notas: [9, 10, 9, 6.5, 7.5]
},

{
    nome: 'Jeferson',
    idade: 24,
    altura: 1.77,
    isCracha: true,
    isCamisa: false,
    isPaciencia: true,
    isChora: false,
    cor: 'prestigio',
    notas: [10, 10, 10, 10, 10]
},

{
    nome: 'Jeff',
    idade: 19,
    altura: 1.75,
    isCracha: true,
    isCamisa: false,
    isPaciencia: true,
    isChora: true,
    cor: 'branco',
    notas: [10, 8, 9, 7, 10]
}
]

//mostrar obj por completo
console.log(IOS);

//obj Jeferson
console.log(IOS[1]);

//retornar apenas a variavel isCamisa do obj Jeferson
console.log(IOS[1].isCamisa, IOS[1].isCracha);

for(i = 0; i < IOS.length; i++){
    let login = IOS[i]
    if(login.isCracha == true){
        console.log("O aluno tem cracha")
        console.log(login.isCracha)
    }else{
        console.log("Aluno não tem cracha")
    }
}

console.clear()

let aluno = {
    nome: 'Jeff',
    idade: 19,
    altura: 1.75,
    isCracha: true,
    isCamisa: false,
    isPaciencia: true,
    isChora: true,
    cor: 'branco',
    notas: [10, 8, 9, 7, 10]
}

//tranformar o OBJ em JSON
console.log(aluno);

console.log(JSON.stringify(aluno));

let Jsonito = '{"nome":"Jeff","idade":19,"altura":1.75,"isCracha":true,"isCamisa":false,"isPaciencia":true,"isChora":true,"cor":"branco","notas":[10,8,9,7,10]}'
//JSON em um obj
console.log(JSON.parse(Jsonito))