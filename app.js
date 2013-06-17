
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');
var redis = require('redis') ;
//var client = redis.createClient(6379,'nodejitsudb3221588570.redis.irstack.com:6379') ;
//var client = redis.createClient() ;
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

exports.server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
//require('./sockets') ;
/*
var io = require('socket.io').listen(server);
io.sockets.on('connection', function(socket){
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


server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});//*/
require('./sockets')