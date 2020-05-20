import express from 'express';

import config from './config'
import router from './router';
import {connect} from './socket';

let _server;

const server ={
    start(){
        const app = express();

        config(app);

        router(app);

        const PORT = app.locals.config.PORT;
        _server=app.listen(PORT, ()=>{
            //CONNECTION SOCKET
            connect();

            const ADDRESS = _server.address();
            const HOST = ADDRESS.address === '::' ? 'localhost' : ADDRESS;

            if(process.env.NODE_ENV !== 'test'){
                console.log(`SERVER OK http://${HOST}:${PORT}`);
            }
        });

        return _server;
    },
    close(){
        _server.close();
    }
};

export default server;

if(!module.parent){
    server.start();
}