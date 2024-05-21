//actividad numero 1

let edad = prompt('Porfavor, introduce tu edad')
if (edad < 0) {
    console.log("Edad no válida.")
} else {
    if (edad < 13) {
        console.log("Eres un niño.")
    } else {
        if (edad >= 13 & edad <= 17) {
            console.log("Eres un adolescente.")
        } else {
            if (edad >= 18 & edad <= 64) {
                console.log("Eres un adulto.")
            } else {
                console.log("Eres una persona mayor.")
            }
        }
    }
}

//actividad numero 2

let calificacion = prompt('Introducir una calificacion')
if (calificacion >= 90 & calificacion <= 100) {
    console.log("A")
} else {
    if (calificacion >= 80 & calificacion <= 89) {
        console.log("B")
    } else {
        if (calificacion >= 70 & calificacion <= 79) {
            console.log("C")
        } else {
            if (calificacion >= 60 & calificacion <= 69) {
                console.log("D")
            } else {
                if (calificacion >= 0 & calificacion <= 59) {
                    console.log("F")
                } else {
                    console.log("Calificación no válida.")
                }
            }
        }
    }
}

//actividad numero 3

let lado1 = prompt('Ingrese la longitud del primer lado')
let lado2 = prompt('Ingrese la longitud del segundo lado')
let lado3 = prompt('Ingrese la longitud del tercer lado')
if (lado1 > 0 & lado2 > 0 & lado3 > 0) {
    if (lado1 == lado2) {
        if (lado1 == lado3) {
            console.log("Triangulo Equilatero")
        } else {
            console.log("Triangulo Isosceles")
        }
    } else {
        if (lado1 == lado3) {
            console.log("Isosceles")
        } else {
            if (lado2 == lado3) {
                console.log("Isosceles")
            } else {
                console.log("Escaleno")
            }
        }
    }
} else {
    console.log("Número inválido.")
}


//actividad numero 4

let dia = prompt('Introduzca un número, porfavor')
if (dia >= 1 & dia <= 7) {
    if (dia == 1) {
        console.log("Lunes")
    } else {
        if (dia == 2) {
            console.log("Martes")
        } else {
            if (dia == 3) {
                console.log("Miércoles")
            } else {
                if (dia == 4) {
                    console.log("Jueves")
                } else {
                    if (dia == 5) {
                        console.log("Viernes")
                    } else {
                        if (dia == 6) {
                            console.log("Sábado")
                        } else {
                            console.log("Domingo")
                        }
                    }
                }
            }
        }
    }
} else {
    console.log("Número no válido.")
}

//actividad número 5

let temperatura = prompt('Introduzca una temperatura, porfavor')

if (!isNaN(temperatura)) {
    if (temperatura >= 0) {
        if (temperatura > 99) {
            console.log("Gaseoso")
        } else {
            console.log("Líquido")
        }
    } else {
        console.log("Sólido")
    }
} else {
    console.log("Temperatura no válida")
}