console.log("Intentando llamar a 'funcionDeclarada' antes de su declaración:");
try {
    console.log(funcionDeclarada());
} catch (error) {
    console.log("Error:", error.message);
}

console.log("Intentando llamar a 'funcionExpresada' antes de su declaración:");
try {
    console.log(funcionExpresada());
} catch (error) {
    console.log("Error:", error.message);
}

// Declaración de una función declarada
function funcionDeclarada() {
    return "Función declarada ha sido llamada.";
}

// Declaración de una función expresada
const funcionExpresada = function () {
    return "Función expresada ha sido llamada.";
};

console.log("Llamando a 'funcionDeclarada' después de su declaración:");
console.log(funcionDeclarada());

console.log("Llamando a 'funcionExpresada' después de su declaración:");
console.log(funcionExpresada());

/* Respuestas:
¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración?

R//: Sale un error al momento de llamar a la función expresada y se pudo llamar a la función declarada

¿Cómo difieren los resultados entre la función declarada y la función expresada?

R//: Difieren en que la función expresada no puede ser hoisteada dentro de su scope, la función declarada no depende de ésto por el hecho de ser algo ya definido de por sí

¿Qué indica esto sobre cómo el JavaScript maneja estas dos diferentes declaraciones de funciones?

R//: Indica que las funciones declaradas y las funciones expresadas se utilizan en diferentes casos para diferentes necesidades al momento de crear código, mientras una debe leerse dentro de su scope, la otra funciona como una función ya existente

*/