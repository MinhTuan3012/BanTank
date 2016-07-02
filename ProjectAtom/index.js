var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static(__dirname));


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index1.html');
});

io.on('connection', function(socket){
  //console.log('New User Connected');
  socket.on('connected',function(data){
    console.log(data.msg);
    var tankX = Math.floor((Math.random() * 3200) + 1);
    var tankY = Math.floor((Math.random() * 800) + 1);
    console.log(tankX);
    console.log(tankY);
    socket.emit('set_tank',{x:tankX,y:tankY});
  });
});

http.listen(6969, function(){
  console.log('Server started. Listening on *:6969');
});
