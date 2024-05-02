console.log('Mensaje 1: Inmediatamente');

setTimeout(() => {
    console.log('Mensaje 2: Con Timeout de 0 segundos')
}, 0)

setTimeout(() => {
    console.log('Mensaje 3: Con Timeout de 1 segundo')
}, 1000)
