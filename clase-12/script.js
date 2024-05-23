/*let nombre = prompt('Ingrese un nombre')
for (let interador = 1; interador >= 3; interador = interador + 1) {  
}
 alert(nombre + interador) */

/*let suma = 0
for (let iterador = 1; iterador <= 3; iterador = iterador + 1) {
    let numero = Number(prompt('Ingrese un número'))
    suma = suma + numero
}
alert(suma)*/

let precio = prompt('Ingrese un precio para calcular el iva')

function calcularIva(precio) {
    return precio * 0.21
}
let iva = calcularIva(precio)

console.log(iva)