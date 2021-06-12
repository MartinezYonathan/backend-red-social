module.exports = function (io, cron) {
    console.log("run..");
    cron.schedule('*/30 * * * *', () => {
        console.log("En linia...");
        io.emit('serviceline',"En linia");
    });
}