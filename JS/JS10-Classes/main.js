class Aluno {
    constructor(nome, ano, altura, isCracha, isCamisa, cor){
    this.nome = nome;
    this.ano = ano;
    this.altura = altura;
    this.isCracha = isCracha;
    this.isCamisa = isCamisa;
    this.cor = cor;
    }

    retornaIdade(){
        let dataCompleta = new Date();
        let pegaAno = dataCompleta.getFullYear
        return 2024 - this.ano
    }
}

let aluno1 = new Aluno("Jeferson", 2005, 1.75, true, true, "Carlos");

let aluno2 = new Aluno ("Gabriella", 2005, 1.63, true, true, "Carlos");

console.log(aluno1)
console.log(`A idade do Jeferson é ${aluno1.retornaIdade()}`)
console.log(aluno2)