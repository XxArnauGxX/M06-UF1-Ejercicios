let numero;

while (true) {
    numero = prompt("Escribe un número entero positivo del 1 al 10:");
    numero = Number(numero);

    if (numero > 0 && numero <= 10 && Number.isInteger(numero)) {
        break;
    }

    console.log("El número debe ser un entero positivo entre 1 y 10. Inténtalo de nuevo.");
}

for (let i = 1; i <= 1000; i++) {
    if (i % numero === 0) {
        console.log(i);
    }
}
