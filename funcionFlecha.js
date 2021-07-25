
let a = function(){
    console.log("funcion a")
}

//no se puede llamar sin haber definido antes, no se utiliza hoisting
const b = () => {
    console.log("funcion b")
}

const saludar = () => "Hola"

console.log(saludar())

//retornamos un objeto, ponemos parentesis
const objeto = () => ({nombre: 'Jessi'})
console.log(objeto())

//definiciones de funciones flecha
const unParametro = nombre => ({nombre})
const unParametro2 = nombre => console.log("No confundir, soy una funcion flecha " + nombre)
console.log(unParametro("Jessi"))
unParametro2("Guille")