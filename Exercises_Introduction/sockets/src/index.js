import net from 'net';

const SERVER = net.createServer(socket => {
   socket.on('data', data => {
        console.log(data.toString());
        socket.write(`${data} Mundo?`);
   });
});

SERVER.on('error', ()=>console.log(`ERROR SERVER`));

SERVER.listen({
    host: 'localhost',
    port: 8000,
    exclusive: true
}, () => console.log(`SERVER OK`));
