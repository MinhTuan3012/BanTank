class Client{
  constructor(){
    this.socket = io();
    this.socket.emit('connected',{msg:"New Player connected"});
    this.socket.on('set_tank',function(data){
      console.log(data.x);
      console.log(data.y);
    });
    // this.socket.on('connected', function(msg){
    //   console.log(msg);
    // })
  }
}
