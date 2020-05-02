import http, { request } from 'http';

const SERVER = http.createServer((request, response)=>{
    response.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'});
    /*response.setHeader('Content-Type', 'text/html');
    response.statusCode=200;*/

    if(request.method==='GET'){
        response.write('<h1>Método GET</h1>');
        return response.end();
    }

    response.write('<h1>HOLA</h1>');
    return response.end();
});

SERVER.listen(8000, 'localhost', err=>{
    if(err){
        return console.log(`ERROR SERVER: ${err}`);
    }

    console.log('SERVER OK (http://localhost:8000)');
});