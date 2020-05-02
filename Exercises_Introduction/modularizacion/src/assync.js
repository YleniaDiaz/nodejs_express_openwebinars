import fs from 'fs';
import readline from 'readline';
//const fs = require('fs');
//const readline=require('readline');

//const FILE = process.argv[2];
//node src/index.js file.txt -> file.txt es [2]

export default FILE => {
    console.log('-- ASÍNCRONO --');

    fs.readFile(FILE, (err, contents)=>{
        if(err){
            return console.log(`ERROR -> ${err.message}`);
        }
    
        const LINES = contents.toString().split('\n');
        
        for(let line of LINES){
            console.log(`Caracteres por línea: ${line.length}`);
        }
    
        console.log(`Total de líneas: ${LINES.length}`);
    });
    
    console.log(`Fichero leído: ${FILE}`);
}