//import fs from 'fs';
//import readline from 'readline';
const fs = require('fs');
const readline=require('readline');

const FILE = process.argv[2];
//node src/index.js file.txt

let lines=0;

const READ_LINE = readline.createInterface({
    input: fs.createReadStream(FILE),
    crlfDelay: Infinity
});

READ_LINE.on('line', (line)=>{
    lines++;
    console.log(`Caracteres por línea: ${line.length}`);
});

READ_LINE.on('close', ()=>console.log(`Total líneas: ${lines}`));