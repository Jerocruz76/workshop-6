
function master(){
    alert("Según la foto contesta las siguientes preguntas:")
    let question1 = prompt("Se podrá ejecutar 'a' antes de su declaración?").toLowerCase()
    let question2 = prompt("Se podrá ejecutar 'b' antes de su declaración?").toLowerCase()
    let question3 = prompt("Se podrá ejecutar 'c' antes de su declaración?").toLowerCase()
    let question4 = prompt("Dará resultado positivo la función expresada antes de su ejecución?").toLowerCase()
    let question5 = prompt("Dará resultado positivo la funcion declarada antes de su ejecución?").toLowerCase()
    alert("La respuesta #1 es:")
    if(question1 === 'si'){
        alert("Incorrecto, 'a' no está definida aún, por lo que se lee pero no se ejecuta")
    }else if(question1 === 'no'){
        alert("Correcto!")
    }
    alert("La respuesta #2 es:")
    if(question2 === 'si'){
        alert("Incorrecto, el valor de 'b' no puede ser hoisteado antes de su declaración")
    }else if(question2 === 'no'){
        alert("Correcto!")
    }
    alert("La respuesta #3 es:")
    if(question3 === 'si'){
        alert("Incorrecto, el valor de 'c' se define como inexistente, por lo tanto sale un error")
    }else if(question3 === 'no'){
        alert("Correcto!")
    }
    alert("La respuesta #4 es:")
    if(question4 === 'si'){
        alert("Incorrecto, la función expresada no puede ser hoisteada dentro de su scope")
    }else if(question4 === 'no'){
        alert("Correcto!")
    }
    alert("La respuesta #5 es:")
    if(question5 === 'si'){
        alert("Correcto!")
    }else if(question5 === 'no'){
        alert("Incorrecto, la función declarada puede ser tomada como ya existente antes de ejecutar todo el código")
    }
}



