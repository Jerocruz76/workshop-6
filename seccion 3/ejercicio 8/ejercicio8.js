

let i = true
function closure(){
    let cont = 0
    function incrementar(num){
        cont += num
        console.log(cont);
    }
    return incrementar
}

const incremento = closure();

while(i){
    let subirCont = parseInt(prompt("Ingresa 1 para subir el contador o 2 para salir"))
    if(subirCont === 1){
        incremento(subirCont);
    }else if(subirCont === 2){
        i = false
    }
}