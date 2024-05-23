//1)Crea una función llamada decirNombre(nombre) y nos ejecute una alerta “Hola “ + nombre
/*let nombre = prompt('Ingrese un nombre')

function decirNombre(nombre) {
    alert("Hola " + nombre)
}
decirNombre(nombre)

//2)Crea una función llamada saludar(nombre) y nos devuelva un  string  “Hola “ + nombre y luego invoca la función dentro de una alerta
/*let nombre = prompt('Ingrese un nombre')

function saludar(nombre) {
    return "Hola " + nombre
}
alert(saludar(nombre)) 

//3)Crea una función llamada sumar(a,b) y nos devuelva la suma de a y b
let a = prompt('Ingrese un número')
let b = prompt('Ingrese otro número')

function sumar(a, b) {
    let suma = Number(a) + Number(b)
    return suma
}

alert(sumar(a, b))

//4)Crea una función llamada restar(a,b) y nos devuelva la resta de a y b
let a = prompt('Ingrese un número')
let b = prompt('Ingrese otro número')

function restar(a, b) {
    let resta = 0
    if (a > b) {
        resta = Number(a) - Number(b)
    } else {
        alert("el segundo número no puede ser mayor al primero")
        a = prompt('Ingrese un número')
        b = prompt('Ingrese otro número')
        resta = Number(a) - Number(b)
    }
    return resta
}
alert(restar(a, b)) 

//5)Crea una función llamada calcular(operación,a,b) y dependiendo de si la operación es “+” o “-” invocar la función sumar(a,b) o restar(a,b) (retornar el resultado), en caso de recibir una operación no válida devolver null

let operacion = prompt('Ingrese la operación que desea realizar')
let numero1 = prompt('Ingrese un número')
let numero2 = prompt('Ingrese otro número')

function calcular(operacion, numero1, numero2) {
    let resultado = 0
    if (operacion === "+") {
        resultado = sumar(numero1, numero2)
    } else if (operacion === "-") {
        resultado = restar(numero1, numero2) //ver! ej:12-3
    } else {
        alert('Operación inválida')
    }
    return resultado
}

function restar(numero1, numero2) {
    let resta = 0
    if (numero1 >= numero2) {
        resta = Number(numero1) - Number(numero2)
    } else {
        alert("el segundo número no puede ser mayor al primero")
        numero1= prompt('Ingrese un número')
        numero2 = prompt('Ingrese otro número')
        resta = Number(numero1) - Number(b)
    }
    return resta
}

function sumar(numero1, numero2) {
    let suma = Number(numero1) + Number(numero2)
    return suma
}
alert(calcular(operacion, numero1, numero2)) */

//6)Crea una función llamada contarHasta(número) y nos cuente hasta ese número por consola

let numero = prompt('Ingrese el número hasta donde desea contar')

function contarHasta(numero) {

    let contar = ""
    for (let iterador = 0; iterador <= numero; iterador = iterador + 1) {
        console.log(iterador)
    }
}
contarHasta(numero)