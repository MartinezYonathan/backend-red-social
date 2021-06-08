module.exports = function (io) {
  io.on('connection', (socket) => {
     socket.on('join chat', (params) => {
       console.log("========room1 "+params.room1 + ",  ========room2 " + params.room2);
       socket.join(params.room1);
       socket.join(params.room2);
     });

     socket.on('start_typing', data => {
       io.to(data.receiver).emit('is_typing', data);
     });

     socket.on('stop_typing', data => {
      io.to(data.receiver).emit('has_stopped_typing', data);
    });
  });
}
