const colors = require('colors');
const fs = require('fs');

let crearArchivo = (base) => {
    return new Promise((resolve,reject)=>{
        let data;
        for (let index = 1; index <= 10; index++) {
            data+= `${base} * ${index} = ${ base*index}\n`
        }
        if(!Number(base)){
            reject(`El dato ingresado ${base} no es un numero`);
            return;
        }
        fs.writeFile(`archivos/tabla-${base}.txt`, data, (err) => {
            if(err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)
        });
    }) 
}

let listarTabla = (base,limite = 10) => {
    return new Promise( (resolve,reject)=>{
        console.log("=====================".rainbow)
        console.log("prueba".underline.red)
        console.log("=====================".rainbow)
        for (let index = 1; index <= limite; index++) {
            console.log(`${base} * ${index} = ${ base*index}\n`)
        }
    })
}

module.exports = {
    crearArchivo,
    listarTabla
} 


