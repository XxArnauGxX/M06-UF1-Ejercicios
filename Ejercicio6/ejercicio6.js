let numeroInput = prompt("Escribe un número entero y positivo:");

let numeroInputAInteger = parseInt(numeroInput);

if (!isNaN(numeroInputAInteger)) {
    if (numeroInputAInteger < 0) {
        console.log("Número negativo, convirtiendo a positivo...");
        numeroInputAInteger = Math.abs(numeroInputAInteger);
    }

    numeroInputAInteger = Math.round(numeroInputAInteger);

    let resultado = 1;
    for (let i = 1; i <= numeroInputAInteger; i++) {
        resultado *= i;
    }

    console.log(`El factorial de ${numeroInputAInteger} es: ${resultado}`);
} else {
    console.log("Error: ¡Por favor introduce un número válido!");
}
