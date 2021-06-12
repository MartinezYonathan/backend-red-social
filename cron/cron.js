var sleep = require('system-sleep');

module.exports = function (io, cron) {
    console.log("run..");

    while (true) {
        console.log("En linea...");
        sleep(10 * 2000); // sleep for 10 seconds  
        io.emit('serviceline', "En linia");
    }
}

