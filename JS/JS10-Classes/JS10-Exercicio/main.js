class contaBancaria {
    constructor(nome, idade, salario, sexo, agencia, conta, numeroConta) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.sexo = sexo;
        this.agencia = agencia;
        this.conta = conta;
        this.numeroConta = numeroConta;
    }

    contaPoupança() {

        return this.salario - this.salario * 0.015;

    }

    contaCorrente() {

        return this.salario - this.salario * 0.036;

    }

    contaEstudante() {

        return this.salario - this.salario * 0.012;

    }
}


let poupança = new contaBancaria('Gabriella', 24, 2200, 'Feminino', 5, 'Poupança', 256431586)

let corrente = new contaBancaria('Jefferson', 19, 4000, 'Masculino', 5, 'Corrente', 234126896)

let estudante = new contaBancaria('Caio', 22, 3000, 'Masculino', 5, 'Estudante', 243654123)

console.log(`Nome: ${poupança.nome}, Idade: ${poupança.idade} anos, Salário: ${poupança.salario}, Sexo: ${poupança.sexo}, Agência: ${poupança.agencia}, Tipo de Conta: ${poupança.conta}, Número da Conta: ${poupança.numeroConta} O novo salário com a taxa descontada é: ${poupança.contaPoupança()}`)

console.log(`Nome: ${corrente.nome}, Idade: ${corrente.idade} anos, Salário: ${corrente.salario}, Sexo: ${corrente.sexo}, Agência: ${corrente.agencia}, Tipo de Conta: ${corrente.conta}, Número da Conta: ${corrente.numeroConta} O novo salário com a taxa descontada é: ${corrente.contaCorrente()}`)

console.log(`Nome: ${estudante.nome}, Idade: ${estudante.idade} anos, Salário: ${estudante.salario}, Sexo: ${estudante.sexo}, Agência: ${estudante.agencia}, Tipo de Conta: ${estudante.conta}, Número da Conta: ${estudante.numeroConta} O novo salário com a taxa descontada é: ${estudante.contaEstudante()}`)