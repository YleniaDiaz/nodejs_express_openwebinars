import http from 'http';

const SERVER=http.createServer((request, respose)=>{
    respose.write('<h1>BASIC SERVER</h1>');
    respose.end();
});

SERVER.listen(8000, 'localhost', err => {
    if(err){
        return console.log(`ERROR: ${err}`);
    }

    console.log(`SERVER OK (http://localhost:8000)`);
});