var sleep = require('system-sleep');

module.exports = function (io, cron) {
    console.log("run..");

    while (true) {
        sleep(10 * 3000); // sleep for 10 seconds  
        io.emit('serviceline', "En linia");
    }
}

