var app = require('express')()
	, server = require('http').createServer(app)
	, io = require('socket.io').listen(server);

server.listen(8181);

app.get('/', function(req,res) {
	res.sendfile(__dirname+'/index.html');
});

io.sockets.on('connection', function(socket) {
	socket.emit('welcome', {you:'win'});
	socket.on('incoming', function(data) {
		socket.broadcast.emit('queueevent',data);
	});
});
