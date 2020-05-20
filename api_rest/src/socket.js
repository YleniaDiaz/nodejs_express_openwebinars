import webSockect from 'ws';

let instance;

export const connect=()=>{
    const socket = new webSockect.Server({port: 8080});
    socket.on('connection', ws =>{
        instance = ws;
        ws.send('Connection OK on socket');
    });
};

export const send=(method, url, data)=>{
    if(instance){
        instance.send(`METHOD -> ${method} - URL -> ${url} - DATA -> ${JSON.stringify(data)}`);
    }else{
        console.log(`ELSE (instance = ${instance})`);
    }
};