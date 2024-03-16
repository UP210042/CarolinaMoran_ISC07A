function getUsers() {
    setTimeout(() => {
        const users = [
            { name: "rogelio", years: 22 },
            { name: "Luis", years: 30 }
        ];
        callback(users);
    }, 2000);
}

function getInfo(name, callback) {
    setTimeout(() => {
        let error = null;
        const saludo = "hola" + name + "como estas?";
        if (error !== "rogelio") {
            error = new Error("esta mal la persona", error);
        }
        callback(saludo, error);
    }, 5000);
}

getUsers((users) => {
    for (let i = 0; i < users.length; i++) {
        getInfo(users[i].name, (saludo, error) => {
            if (error !== null) {
                error = new Error("esta mal la persona", error);
            } else
                console.log(saludo);
        });
    }
})

function getInfoWithPromise(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let error = null;
            const saludo = "hola" + name + "como estas?";
            if (error !== "rogelio") {
                error = new Error("esta mal la persona", error);
            }else{
                resolve(saludo);
            }
        }, 5000);
    })
}

function getUsersWithPromise(){
     const promise = new Promise((resolve, reject) =>{
         setTimeout(()=>{
             const users = [
                 { name: "rogelio", years: 22 },
                 { name: "Luis", years: 30 }
             ];
             resolve(users);
         },2000)
     })
}

getUsersWithPromise()
    .then((users)=>{
        // for(let i=0;i<users.length;i++){
        //     getInfoWithPromise(users[i].name)
        //     .then((saludo)=>{
        //         console.log(saludo);
        //     })
        //     .catch(error =>{
        //         console.log(error);
        //     })
        // }
        let newResponses=[];
        for(let i=0;i<users.length;i++){
            newResponses.push(getInfoWithPromise(users[i].name))
        }
        return Promise.all(newResponses);
    })
    .then((info)=>{
        console.log(info);
    })
    .catch((error)=>{
        console.log("error en la promesa", error)
    });

    async function main(){
        let users = await getInfoWithPromise();
        for(let i=0;i<users.length;i++){
            try{
                
            }
        }
    }