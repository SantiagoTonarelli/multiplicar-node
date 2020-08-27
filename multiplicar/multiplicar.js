//requireds
const fs = require('fs');
var colors = require('colors');

//const { rejects } = require('assert');
//const fs = require('express'); paquete que se instala
//const fs = require('./path');

let listarTabla = (base, limite = 10) => { //nuevo valor por defecto ecs6
    console.log('============================'.green);
    console.log(`===tabla de ${base}===`.green);
    console.log('============================'.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}\n`);
    }

}

//module.exports.crearArchivo = (base) => { forma 2 desprolija
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`)
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`);
        });
    });

};

//forma 1
module.exports = {
    crearArchivo, // crearArchivo:crearArchivo no es necesario gracias a ecs6
    listarTabla
}