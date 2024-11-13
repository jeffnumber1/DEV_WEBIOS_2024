document.body.style.backgroundColor = "Purple"

document.title = "Socorro Dom"
//Alterar o atributo lang
document.documentElement.lang = "pt-br"
//document.documentElement.lang = navigator.language

//Criação de elementos com JS
let campoNovo = document.createElement('button')

campoNovo.style.backgroundColor = "lightpink"
campoNovo.style.borderRadius = "10px"

document.body.appendChild(campoNovo).innerHTML = "Enviar"
