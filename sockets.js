/**
 * New node file
 */
var parent = module.parent.exports,
	app = parent.app ,
	server = parent.server ;
	
var socketio = require('socket.io').listen(server) ;
socketio.sockets.on('connection', function(socket){
    console.log("Connection " + socket.id + " accepted.");
    socket.on('message', function(message){
        console.log("Received message: " + message + " - from client " + socket.id);
        socket.emit("Your said:"+message) ;
        socket.emit('news',{hello:'world'}) ;
    });
    socket.on('disconnect', function(){
        console.log("Connection " + socket.id + " terminated.");
    });
    socket.on('news',function(data){
    	console.log("news:"+data) ;
    	}
    ) ;
});
/*
socketio.sockets.on('connnection',function(socket){

	

    socket.on('message', function(message){
        console.log("Received message: " + message + " - from client " + socket.id);
        socket.emit("Your said:"+message) ;
        socket.emit('news',{hello:'world'}) ;
    });
    socket.on('disconnect', function(){
        console.log("Connection " + socket.id + " terminated.");
    });
    socket.on('news',function(data){
    	console.log("news:"+data) ;
    	}
    ) ;	
	}
) ;
*/
