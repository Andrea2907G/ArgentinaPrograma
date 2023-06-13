//Ejercicio 2

let mes;
let dias;
let seguir = true;
const readlineSync = require('readline-sync');
let num = readlineSync.question('Ingrese un numero entero del 1 al 12:');
num = Number(num);
while (seguir) {
    switch (num) {
        case 1:
            mes = "enero";
            dias = 31;
            seguir = false;
            break;
        case 2:
            mes = "febrero";
            dias = 28;
            seguir = false;
            break;
        case 3:
            mes = "marzo";
            dias = 31;
            seguir = false;
            break;
        case 4:
            mes = "abril";
            dias = 30;
            seguir = false;
            break;
        case 5:
            mes = "mayo";
            dias = 31;
            seguir = false;
            break;
        case 6:
            mes = "junio";
            dias = 30;
            seguir = false;
            break;
        case 7:
            mes = "julio";
            dias = 31;
            seguir = false;
            break;
        case 8:
            mes = "agosto";
            dias = 31;
            seguir = false;
            break;
        case 9:
            mes = "septiembre";
            dias = 30;
            seguir = false;
            break;
        case 10:
            mes = "octubre";
            dias = 31;
            seguir = false;
            break;
        case 11:
            mes = "noviembre";
            dias = 30;
            seguir = false;
            break;
        case 12:
            mes = "diciembre";
            dias = 31;
            seguir = false;
            break;
        default:
            num = readlineSync.question('Hubo un error, por favor ingrese un numero del 1 al 12:');
            num = Number(num);
    }
}
console.log ('La cantidad de dias del mes de %s es %i', mes, dias);