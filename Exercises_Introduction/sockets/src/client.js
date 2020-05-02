import net from 'net';

const SOCKET = net.Socket();
SOCKET.connect(8000, 'localhost');

SOCKET.write('Hola');

SOCKET.on('data', data => console.log(data.toString()));