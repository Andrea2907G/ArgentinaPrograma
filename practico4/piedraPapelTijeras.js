// ? PIEDRA PAPEL O TIJERA **************


// 2.

// * *Funcion genera un valor random entero entre 0 y 2, y retorna piedra papel o tijeras segun sea ese valor random * * 

function obtenerJugadaComputadora() {
    const valoresPosibles = ["piedra", "papel", "tijeras"];
    const numRandom = Math.floor(Math.random() * 3);
    const jugadaComputadora = valoresPosibles[numRandom];
    return jugadaComputadora;
}

// 3.

// * *Funcion que retorna un valor de tipo string que puede ser solo piedra papel o tijeras ingresado por el usuario* * 


function obtenerJugadaUsuario() {
    let jugadaUsuario;
    const readlineSync = require('readline-sync');
    jugadaUsuario = readlineSync.question('Ingrese piedra, papel o tijeras: ').toLowerCase();
    let solicitarIngreso = true;
    while (solicitarIngreso) {
        if (jugadaUsuario === "piedra" || jugadaUsuario === "papel" || jugadaUsuario === "tijeras") {
            solicitarIngreso = false;
        } else {
            jugadaUsuario = readlineSync.question('Hubo un error en el valor ingresado por favor ingrese piedra, papel o tijeras: ').toLowerCase();
        }
    }
    return jugadaUsuario;
}

// 4.

function determinarGanador (eleccionComputadora, eleccionUsuario) {
    let ganador;
    if (eleccionComputadora === eleccionUsuario) {
        ganador = "Empate";
    }
    else if (eleccionComputadora === "piedra" && eleccionUsuario === "tijeras" || 
    eleccionComputadora === "papel" && eleccionUsuario === "piedra" ||
    eleccionComputadora === "tijeras" && eleccionUsuario === "papel") {
        ganador = "Gana la computadora";
    }

    else {
        ganador = "Gana el usuario";
    }
    return ganador;
}
// ------------------------------------------------------------------------
/*
function determinarGanador (eleccionComputadora, eleccionUsuario) {
    if (eleccionComputadora === "piedra") {
        if ( eleccionUsuario == "tijeras") {
            ganador = "Gana la computadora"; //! Gana la compu
        } else if (eleccionUsuario == "papel") {
            ganador = "Gana el usuario"; // ? Gana el usuario
        } else {
            ganador = "Empate"; //Empate
        }
    }else if (eleccionComputadora == "papel") {
        if (eleccionUsuario == "piedra") {
            ganador = "Gana la computadora"; //! Gana la compu
        } else if (eleccionUsuario == "tijeras") {
            ganador = "Gana el usuario"; // ? Gana el usuario
        } else {
            ganador = "Empate"; //Empate
        } 
    } else {
        if (eleccionUsuario == "piedra") {
            ganador = "Gana el usuario"; // ? Gana el usuario
        } else if (eleccionUsuario == "papel") {
            ganador = "Gana la computadora"; //! Gana la compu
        } else {
            ganador = "Empate"; //Empate
        }
    }
    return ganador;
}
*/

// 5. 

const jugadaComputador = obtenerJugadaComputadora();
const jugadaUsuario = obtenerJugadaUsuario();
const resultado = determinarGanador (jugadaComputador, jugadaUsuario);

// 6.

console.log ("La computadora eligio: %s", jugadaComputador);
console.log ("El usuario eligio: %s", jugadaUsuario);
console.log("El resultado fue: %s", resultado);
