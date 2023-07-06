// ? PIEDRA PAPEL O TIJERA **************


// 2.

// * *Funcion genera un valor random entero entre 0 y 2, y retorna piedra papel o tijeras segun sea ese valor random * * 

function obtenerJugadaComputadora() {
    let valoresPosibles = ["piedra", "papel", "tijeras"];
    let numRandom = Math.floor(Math.random() * 3);
    let jugadaComputadora = valoresPosibles[numRandom];
    return jugadaComputadora;
}

// 3.

// * *Funcion que retorna un valor de tipo string que puede ser solo piedra papel o tijeras ingresado por el usuario* * 


function obtenerJugadaUsuario() {
    const readlineSync = require('readline-sync');
    let jugadaUsuario = readlineSync.question('Ingrese piedra, papel o tijeras: ').toLowerCase();
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

/*
-----------------------------------------------------------------------

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
            ganador = "Gana la computadora"; //? Gana la compu
        } else if (eleccionUsuario == "tijeras") {
            ganador = "Gana el usuario"; //? Gana el usuario
        } else {
            ganador = "Empate"; //Empate
        } 
    } else {
        if (eleccionUsuario == "piedra") {
            ganador = "Gana el usuario"; //? Gana el usuario
        } else if (eleccionUsuario == "papel") {
            ganador = "Gana la computadora"; //? Gana la compu
        } else {
            ganador = "Empate"; //Empate
        }
    }
    return ganador;
}

-----------------------------------------------------------------------
*/

// 5. 

function jugarPiedraPapelTijeras() {
    const jugadaComputador = obtenerJugadaComputadora();
    const jugadaUsuario = obtenerJugadaUsuario();
    const resultado = determinarGanador (jugadaComputador, jugadaUsuario);
// 6.
    console.log ("La computadora eligio: %s.", jugadaComputador);
    console.log ("El usuario eligio: %s.", jugadaUsuario);
    console.log("El resultado fue: %s.", resultado);
    }


// ! Con esta función llamo al resto de las funciones y obtengo el resultado.

jugarPiedraPapelTijeras();

// Extra 1: No entendí la consigna.

//Extra 2: 

/*

function jugadasMultiples() {
    const readlineSync = require('readline-sync');
    cantidadDeJugadas = parseInt(readlineSync.question('Ingrese la cantidad de jugadas que desea para la partida: '));
    let puntosParaComputadora = 0;
    let puntosParaUsuario = 0;
    for (let i = 1; i <= cantidadDeJugadas; i++) {
        let jugadaComputador = obtenerJugadaComputadora();
        let jugadaUsuario = obtenerJugadaUsuario();
        let resultado = determinarGanador (jugadaComputador, jugadaUsuario);
        if (resultado === "Gana la computadora") {
            puntosParaComputadora++
            console.log("Juego %i, la computadora eligio: %s, el usuario eligio: %s, el resultado fue: %s.", i, jugadaComputador, jugadaUsuario, resultado);
        }else if (resultado === "Gana el usuario") {
            puntosParaUsuario++
            console.log("Juego %i, la computadora eligio: %s, el usuario eligio: %s, el resultado fue: %s.", i, jugadaComputador, jugadaUsuario, resultado);
        }else {
            console.log("Juego %i, la computadora eligio: %s, el usuario eligio: %s, el resultado fue: %s.", i, jugadaComputador, jugadaUsuario, resultado);
        }
    }
    if (puntosParaComputadora === puntosParaUsuario) {
        console.log ("Hubo un Empate %i a %i.", puntosParaComputadora, puntosParaUsuario)
    } else if (puntosParaComputadora > puntosParaUsuario) {
        console.log ("Gana la computadora %i a %i", puntosParaComputadora, puntosParaUsuario);
    } else {
        console.log("Gana el usuario %i a %i", puntosParaComputadora, puntosParaUsuario);
    }
} 

jugadasMultiples() 

*/

