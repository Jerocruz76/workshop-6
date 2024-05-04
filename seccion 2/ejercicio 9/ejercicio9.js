let timeUser = parseInt(prompt("Ingresa un intervalo de tiempo"))
const url = "https://jsonplaceholder.typicode.com/posts"

const funcionpromesa = function(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            fetch(url)
            .then((response)=>{
                if(!response.ok){
                    throw new Error ("Error al cargar los datos")
                }
                return response.json()
            })
            .then((data)=>{
                console.log(data);
                // console.log(data.userId)
                // console.log(data.id)
                // console.log(data.title)
                // console.log(data.body)
                resolve(data)
            })
            .catch((error)=>{
                console.error(error)
                reject(error)
            })
        },timeUser*1000)
})
}

funcionpromesa()