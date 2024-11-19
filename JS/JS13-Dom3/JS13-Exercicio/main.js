let valor = document.querySelector('input')

let resultado = document.querySelector("span")

let Calcular = () => {
    let guardaValor = valor.value
    novoSalario = (guardaValor * 1.17) + 215
    resultado.innerHTML = (`O novo salário é ${novoSalario}`)
}