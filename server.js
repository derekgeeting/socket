var io = require('socket.io-client');

var socket = io.connect('localhost', {
	port: 8181
});
socket.on('connect', function() {
	console.log("yo i got connected");
	socket.emit('incoming', {user:'data'});
});
