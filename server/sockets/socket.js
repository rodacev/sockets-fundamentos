const { io } = require('../server')

//para saber desde el backend que un usuario se conecta
io.on('connection', (client) => {

    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'admin',
        mensaje: 'Bienvenido a esta aplicación'
    });


    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', {
            usuario: data.usuario,
            mensaje: data.mensaje
        })


        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'TODO SALIÓ BIEN!'
        //     })
        // } else {
        //     callback({
        //         resp: 'TODO SALIÓ MAL :('
        //     })
        // }

    });
});