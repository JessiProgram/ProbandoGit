/* 
**************************
        PERSONA
**************************
*/

function Persona(nombre, apellido, edad) {
    this._nombre = nombre
    this._apellido = apellido
    this._edad = edad
}

// Persona.prototype.getNombre = function () {
//     return this._nombre
// }

// Persona.prototype.getApellido = function () {
//     return this._apellido
// }

// Persona.prototype.getEdad = function () {
//     return this._edad
// }

// Persona.prototype.getNombreCompleto = function () {
//     return `${this._nombre} ${this._apellido}`
// }

// Persona.prototype.setNombre = function (nombre) {
//     this._nombre = nombre
// }

// Persona.prototype.setApellido = function (apellido) {
//     this._apellido = apellido
// }

const prototypePersona = {
    getNombre: function () {
        return this._nombre
    },
    getApellido: function () {
        return this._apellido
    },
    setNombre: function (nombre) {
        this._nombre = nombre
    },
    setApellido: function (apellido) {
        this._apellido = apellido
    },
    getEdad: function () {
        return this._edad
    },
    getNombreCompleto: function () {
        return `${this._nombre} ${this._apellido}`
    }
}

Persona.prototype = Object.assign(Persona.prototype, prototypePersona)


/* 
**************************
        EMPLEADO
**************************
*/

function Empleado(nombre, apellido, edad, sede) {
    Persona.call(this, nombre, apellido, edad)
    this._sede = sede
}

// const prototypeEmpleado = {
//     getSede: function () {
//         return this._sede
//     },
//     setSede: function (sede) {
//         this._sede = sede
//     },
//     getNombreCompleto: function () {
//         return `${this._nombre} ${this._apellido} de ${this._sede}`
//     }
// }

// Empleado.prototype = Object.assign(Empleado.prototype, prototypeEmpleado)

Empleado.prototype.getSede = function () {
    return this._sede
}

Empleado.prototype.setSede = function (sede) {
    this._sede = sede
}

Empleado.prototype.getNombreCompleto = function () {
    return `${this._nombre} ${this._apellido} de ${this._sede}`
}

Empleado.prototype = Object.assign(
    Persona.prototype,
    Empleado.prototype
)


/* 
**************************
        RUN
**************************
*/

let empleado1 = new Empleado('Jessi', 'Alarcón', 30, 'Central')

console.log('--------------------------------------------------------------')
console.log('empleado1.getNombre()', empleado1.getNombre())
console.log('empleado1.getApellido()', empleado1.getApellido())
console.log('empleado1.getEdad()', empleado1.getEdad())
console.log('empleado1.getNombreCompleto()', empleado1.getNombreCompleto())
console.log('empleado1.getSede()', empleado1.getSede())
console.log('--------------------------------------------------------------')

empleado1.setNombre('Guille')
empleado1.setApellido('Paiva')
empleado1.setSede('Central')

console.log('--------------------------------------------------------------')
console.log('empleado1.getNombre()', empleado1.getNombre())
console.log('empleado1.getApellido()', empleado1.getApellido())
console.log('empleado1.getEdad()', empleado1.getEdad())
console.log('empleado1.getNombreCompleto()', empleado1.getNombreCompleto())
console.log('empleado1.getSede()', empleado1.getSede())
console.log('--------------------------------------------------------------')