let ex1  = [17, 43, 8, 4, 97, 56, 29, 95];

function validar(item){
    if (item % 2 === 0) {
        console.log(`O número ${item} é par`)
    }  else {
        console.log(`O número ${item} é impar`)
    }
}

ex1.forEach(validar)

let ex2 = [ 17, 43, 8, 4, 97, 56, 29, 3, 75, 34, 88, 82, 61, 59];


let filtrar = ex2.filter( (valor) =>{
    return valor > 20 && valor < 80
})

console.log(`${filtrar}`);