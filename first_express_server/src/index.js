import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    res.send('<h1>Hola mundo</h1>');
});

app.listen('9000', ()=>{
    console.log('SERVER OK (http://localhost:9000)');
});