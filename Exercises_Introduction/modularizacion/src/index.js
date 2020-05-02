import readline from 'readline';

import assync from './assync';
import events from './events';

const FILE = process.argv[2];

const RL = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

RL.question(
    `¿Cómo quiere leer el fichero?
    1. Asíncrono (default)
    2. Eventos
    Seleccione una opción: `, 
    value => {
        console.log(`Seleccionó: ${value} \n\n`);

        switch(value){
            case '2':
                events(FILE);
                break;
            case '1':
            default:
                assync(FILE);
                break;
        }
        RL.close();
    }
);