function manejarAsincronia(promesa){
    promesa.then(callback => callback()).catch(errorsito => console.log(errorsito))
}

let callback = () =>{
    console.log("¡Promesa cumplida y callback ejecutado!")
}

let promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            const prom = false;
            if (prom) {
                resolve(callback);
            } else {
                reject('No se cumplió la promesa');
            }
        }, 2000);
    });
manejarAsincronia(promesa)