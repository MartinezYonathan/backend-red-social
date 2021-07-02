class User {
  constructor() {
    this.globalArray = [];
  }

  EnterRoom(id, name, room) {
    const user = { id, name, room };
    this.globalArray.push(user);
    return user;
  }

  GetUserId(id) {
    const socketId = this.globalArray.filter(userId => userId.id === id)[0];
    return socketId;
  }
  
  GetUserName(name) {
    const socketId = this.globalArray.filter(userId => userId.name === name)[0];
    return socketId;
  }

  RemoveUser(name) {
    const user = this.GetUserName(name);
    if (user) {
      this.globalArray = this.globalArray.filter(userId => userId.id !== id);
    }
    return user;
  }

  GetRoomList(room) {
    const roomName = this.globalArray.filter(user => user.room === room);
    const names = roomName.map(user => user.name);
    return names;
  }

}

module.exports = { User };
