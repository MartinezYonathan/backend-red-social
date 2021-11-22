module.exports = function (io, User, _) {
  const userData = new User();
  const PING_TIME = 15;
  console.log("run_socket...");

  const ping = () => {
    console.log("En linea...");
    const roomList = userData.GetRoomList('global');
    console.log(roomList);
    io.emit('usersOnline', _.uniq(roomList));
  };

  io.on('connection', (socket) => {

    socket.on('refresh', (data) => {
      io.emit('refreshPage', data);
    });
   
    socket.on('refreshllamada', (data) => {
      io.emit('refreshPagellamada', data);
    });

    socket.on('online', data => {
      socket.join(data.room);
      console.log(data);
      userData.EnterRoom(socket.id, data.user, data.room);
      const roomList = userData.GetRoomList(data.room);
      io.emit('usersOnline', _.uniq(roomList));
    });

    socket.on('users', data => {
      const roomList = userData.GetRoomList(data.room);
      io.emit('usersOnline', _.uniq(roomList));
    });

    socket.on('desconectar', data => {
        const userArray = userData.GetRoomList('global');
        const arr = _.uniq(userArray);
        userData.RemoveItemFromArr(arr,data);
        _.remove(arr, n => n === data);
        io.emit('usersOnline', arr);
    });
    
    socket.on('disconnect', () => {
      const user = userData.RemoveUser(socket.id);
      if (user) {
        const userArray = userData.GetRoomList(user.room);
        const arr = _.uniq(userArray);
        _.remove(arr, n => n === user.name);
        io.emit('usersOnline', arr);
      }
    });
    
  });

  setInterval(ping, PING_TIME * 1000);
}
