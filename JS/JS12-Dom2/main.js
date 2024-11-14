//Pegando uma informação no HTML utilizando ID
let valor = document.getElementById('recebeValor')
//Pega elemento utilizando o atributo name
let resultado = document.getElementById('resultado')

const Tabuada = () => {
    //value - guardar o valor que esta sendo digitado dentro de variavel
    let guardaValor = valor.value;
    resultado.innerHTML = ''
    resultado.style.color = "Black"

    if(guardaValor == ''){
        resultado.innerHTML = "Insira um valor valido."
        resultado.style.color = "Purple"
    }else{
        resultado.style.color = "Green"
        for (i = 0; i <= 100; i++){
            resultadoTabuada = guardaValor * i
            
            console.log(guardaValor, 'x', i, '=', resultadoTabuada)
            resultado.innerHTML += `${guardaValor} x ${i} = ${guardaValor * i} <br>` 
        }
    }  
}
    
const Limpar = () => {
    resultado.innerHTML = '';
    valor.value = '';
}