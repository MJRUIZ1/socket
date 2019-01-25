var express = require ('express')
var aplicacion = express()

const net = require('net')
const server = require ('http').Server(aplicacion)
const sockest = require ('socket.io')(server)

//var HOST = '192.168.43.138';
var HOST = '192.168.1.73';
var PORT = 4000 ;

//server.listen(PORT, function() {
//    console.log('Servidor Activo ' + PORT + ':' + HOST)
//})

var ser = net.createServer(function (so) {
   // console.log(so)
    console.log('Usuario Conectado:' + so.remoteAddress +':' + so.remotePort)
    //so.on('connect', function () {
     //   console.log('Usuario Nuevo')
    //})

    so.on('data', function(data) {
     
        //var dato = data.toString();
        //console.log(data)
       
       // console.log( dato);
    }) 

    so.on('close', function () {
        console.log('Usuario Desconectado')
    })
});

ser.listen(PORT,HOST);