
const main = () => {
    alert("Según la siguiente imagen responde las siguientes preguntas:")
    let answer1 = prompt("Se podrá acceder a la variable global?")
    if( answer1 === 'si'){
        alert("Bien hecho!")
        alert("Esto se debe a que la variable global siempre será accesible")
    }else if(answer1 === 'no'){
        alert("Revisa bien")
        alert("Esto se debe a que la variable global siempre será accesible")
    }

    let answer2 = prompt("Se podrá acceder a la variable local?")
    if( answer2 === 'si'){
        alert("Bien hecho!")
        alert("Se debe a que se llamó la función, es decir, se ejecuta todo lo que está dentro de ella")
    }else if(answer2 === 'no'){
        alert("Revisa bien")
        alert("Se debe a que se llamó la función, es decir, se ejecuta todo lo que está dentro de ella")
    }

    let answer3 = prompt("Se podrá acceder a la variable dentro del bloque?")
    if( answer3 === 'si'){
        alert("Bien hecho!")
        alert("La función dentro de la cual se encuentra el bloque es accesible, por lo tanto es true y se cumple la condición para acceder al bloque")
    }else if(answer3 === 'no'){
        alert("Revisa bien")
        alert("La función dentro de la cual se encuentra el bloque es accesible, por lo tanto es true y se cumple la condición para acceder al bloque")
    }
}



window.addEventListener("DOMContentLoaded", function() {
        main();
    }, false)