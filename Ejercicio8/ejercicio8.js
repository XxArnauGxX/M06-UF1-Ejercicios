let numero = prompt("Escribe un número para comprobar si es palíndromo:");

let numeroInvertido = "";
for (let i = numero.length - 1; i >= 0; i--) {
    numeroInvertido += numero[i];
}

if (numero === numeroInvertido) {
    console.log(`El número ${numero} es un palíndromo.`);
} else {
    console.log(`El número ${numero} no es un palíndromo.`);
}
