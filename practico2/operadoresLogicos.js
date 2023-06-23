//Ejercicio 3

const readlineSync = require('readline-sync');
let valorEntero = readlineSync.question('Ingrese un numero entero: ');
valorEntero = parseInt(valorEntero); // Extrae la parte entera de un flotante y convierte un string a tipo numerico, util para comparación estricta.
if ((valorEntero > 0) && (valorEntero % 2 === 0)) {
    console.log("El numero es positivo y par");
} else if ((valorEntero > 0) && (valorEntero % 2 !== 0)){
    console.log("El numero es positivo e impar");
} else if (valorEntero < 0) {
    console.log("El numero es negativo");
} else {
    console.log("El numero es cero");
}
