const express = require('express');

// para socket
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');


const app = express();

//cambio para socket
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));


// inicializar socket.io // esto va a mantener una conexion directa con el servidor, o sea el backend
module.exports.io = socketIO(server);
require('./sockets/socket');

// se cambia app por server para cambio para socket
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});