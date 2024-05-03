alert(`Considere el siguiente código: console.log("Inicio del script")
setTimeout(() => {
  console.log("Primer setTimeout")
}, 0)
setTimeout(() => {
  console.log("Segundo setTimeout")
}, 0)
Promise.resolve("Promesa resuelta").then(console.log)
console.log("Fin del script")`)
const respuesta = prompt("Proponga un orden desde la primera hasta la ultima línea en ser ejecutada. Ejm: 1,2,3,4,5").split(",")

const respuestaCorrecta = ["1","5","4","2","3"]

function verifyArray(resp){
  let contErrores = 0
  resp.forEach((e, idx) => {
    if(e===respuestaCorrecta[idx]){
      alert("Bien hecho!")
    }else{
      contErrores++
      alert(`Has tenido ${contErrores} errores, a continuación las explicaciones`)
    }
  });
}

verifyArray(respuesta)

alert("Los console log deben ir al principio ya que son sincronos y al entrar a la pila salen inmediatamente")
alert("La promesa es asíncrona por lo que al entrar de ultima en la pila, sale de primera")
alert("Los setTimeout tienen como obligación esperar a que el primero termine para que el segundo se ejecute, solo en caso de tener el mismo tiempo")