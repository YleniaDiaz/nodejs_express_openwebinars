import path from 'path';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

import router from './router';

let _server;

const server = {
    start (){
        const app = express();
        app.disable('x-powered-by');

        app.set('env', process.env.NODE_ENV);

        if(process.env.NODE_ENV !== 'test'){
            app.use(logger('combined'));
            //console.log('END TESTS');
        }

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: false}));

        app.set('views', path.join(__dirname, 'views'));
        app.set('view engine', 'pug');

        app.use('/static', express.static(path.join(__dirname, 'public')));

        router(app);

        app.use((req, res, next)=>{
            res.render('404', {
                title: 'ERROR',
                message: 'La ruta a la que intenta acceder no existe'
            });
            next();
        });

        _server = app.listen('9000', ()=>{
            console.log('SERVER OK (http://localhost:9000)');
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