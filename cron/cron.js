module.exports = function (io, cron, User, _) {
    const userData = new User();

    cron.schedule('* * * * *', () => {
        const roomList = userData.GetRoomList('global');
        console.log("Room: [ "+roomList +" ]");
        io.emit('usersOnline', _.uniq(roomList));
    });
}