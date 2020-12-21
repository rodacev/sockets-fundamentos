var socket = io();

// on --> escuchar
socket.on('connect', function() {
    console.log('Me conecté al servidor')
});


socket.on('disconnect', function() {
    console.log('perdí la conexion con el servidor');
});



// emit --> Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Rodrigo',
    mensaje: 'Hola Mundo'
}, function(mensaje) {
    console.log(mensaje);
});


// escuchando información
socket.on('enviarMensaje', function(mensaje) {
    console.log('servidor: ', mensaje);
});