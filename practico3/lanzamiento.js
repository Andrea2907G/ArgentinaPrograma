// CUENTA REGRESIVA

for (let i = 10; i >= 0; i--) {
    if (i === 10) {
        console.log ("Cuenta regresiva %i", i);
    } else if (i > 0 && i < 10) {
        console.log ("%i", i);
    } else {
        console.log("Lanzamiento!");
    }
}