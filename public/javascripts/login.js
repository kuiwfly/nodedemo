/**
 * New node file
 */
 $(function() {
	var socket ;
	
	$(document).ready(function(){
		$("#submit").click(function(){
			connect() ;
			var msg = {
			           username:$("#username").value,
			           password:$("#password").value,
			 			} ;
			
			socket.emit('login',msg) ;
		}) ;
		
	});	
	
	function connect(){
		socket = io.connect("http://localhost:3000") ;
		socket.on('error',function(){
				console.error('Unable to connect Socket.IO', reason);
			}
		) ;
		socket.on('connect',function(){
				console.info('successfully established a working connection');
			}
		) ;
		socket.on('message',function(data){
			}
		) ;
	    socket.on('disconnect', function(){ s
	     
	    	 }
	     );
	    socket.on('reconnect', function(){ 
	    	 
	    	}
	    );
	    socket.on('reconnecting', function( nextRetry ){ 
	    	
	         }
	    );
	    socket.on('reconnect_failed', function(){
	    	
	    	}
	    );		
	}
	
});
