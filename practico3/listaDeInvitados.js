// LISTA DE INVITADOS


let personas = ['Jose', 'Maria', 'Juan', 'Andres', 'Lionel', 'Sofia', 'Leandro', 'Emilia'];
let rechazados = [];
let admitidos = [];

for (let i = 0; i < personas.length; i++) {
    if(personas[i] == 'Jose' || personas[i] == 'Sofia') {
        rechazados.push(personas[i]);
    } else {
        admitidos.push(personas[i]);
    }
}

// a

let i = 0;
console.log("La lista de invitados admitidos es:"); 
while (i < admitidos.length) {
    console.log(admitidos[i]);
    i++;
}

// b

i = 0;
console.log("La lista de invitados rechazados es:");
while (i < rechazados.length) {
    console.log(rechazados[i]);
    i++;
}

// EXTRA

// a

admitidos = admitidos.sort();

i = 0;
console.log("La lista ordenada de invitados admitidos es:"); 
while (i < admitidos.length) {
    console.log(admitidos[i]);
    i++;
}

// b 

i = 0;

rechazados = rechazados.sort(); 

while (i < rechazados.length) {
    if (i == 0) {
        console.log("La lista ordenada de invitados rechazados es:");
    }
    console.log(rechazados[i]);
    i++;
}