import express from 'express';

import config from './config'

let _server;

const server ={
    start(){
        const app = express();

        config(app);

        //ROUTES
        app.get('/', (req, res, next)=>{
            res.status(200).json({data:'get method'});
        });

        app.post('/resourcer', (req, res, next)=>{
            res.status(201).json({data:'post method'});
        });

        app.put('/', (req, res, next)=>{
            res.status(201).json({data:'put method'});
        });

        app.delete('/', (req, res, next)=>{
            res.status(200).json({data:'deleted method'});
        });

        _server=app.listen('9000', ()=>{
            if(process.env.NODE_ENV !== 'test'){
                console.log('SERVER OK http://localhost:9000');
            }
        });
    },
    close(){
        _server.close();
    }
};

export default server;

if(!module.parent){
    server.start();
}