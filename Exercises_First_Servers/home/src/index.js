import http from 'http';
import fs from 'fs';
import path from 'path';

const FILE = './src/index.html';

const SERVER = http.createServer((request, response)=>{
    let filePath = request.url;
    if(filePath==='/'){
        filePath='index.html';
    }
    filePath=`./src/${filePath}`;

    const EXT = path.extname(filePath)

    let contentType;
    switch(EXT){
        case '.css':
            contentType='text/css';
            break;
        case '.html':
            contentType='text/html';
            break;
    }

    response.writeHead(200, {'Content-Type': `${contentType}; charset=UTF-8`});

    fs.readFile(filePath, (err, content)=>{
        if(err){return console.log(`ERROR READ_FILE: ${err}`);}

        response.write(content);
        response.end()
    });
});

SERVER.listen(8000, 'localhost', err=>{
    if(err){
        return console.log(`ERROR SERVER: ${err}`);
    }

    console.log('SERVER OK (http://localhost:8000)');
});