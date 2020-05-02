import path from 'path';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

const app = express();
app.disable('x-powered-by');

app.set('env', 'development');

app.use(logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res)=>{
    //res.send('<h1>Hola mundo</h1>');
    res.render('home', {
        title: 'First layout',
        message: 'Hello World'
    });
});

app.listen('9000', ()=>{
    console.log('SERVER OK (http://localhost:9000)');
});