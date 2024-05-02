function crearSumador(num1) {
    return function sumador2(num2) {
        return num1 + num2;
    };
}

const sumarCinco = crearSumador(5);
console.log(sumarCinco(3));