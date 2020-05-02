import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();
app.disable('x-powered-by');

app.set('env', 'development');

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res)=>{
    res.send('<h1>Hola mundo</h1>');
});

app.listen('9000', ()=>{
    console.log('SERVER OK (http://localhost:9000)');
});