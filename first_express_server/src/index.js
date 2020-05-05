import path from 'path';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

import router from './router';

const app = express();
app.disable('x-powered-by');

app.set('env', 'development');

//app.use(logger('combined'));
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

app.listen('9000', ()=>{
    console.log('SERVER OK (http://localhost:9000)');
});