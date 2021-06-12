module.exports = function (io, cron) {
    console.log("run..");
    cron.schedule('* * * * *', () => {
        console.log("En linia...");
        io.emit('serviceline',"En linia");
    });
}