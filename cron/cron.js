var sleep = require('system-sleep');

module.exports = function (io, cron) {
    console.log("run..");

    const PING_TIME = 25;

    // Función que hace un ping (el parámetro es un callback vacío)
    const ping = () => { 
        console.log("En linea...");
        io.emit('serviceline', "En linia");
    };

    // Establecer la ejecución periódica del ping. Para cancelar, utilizar clearInterval
    //setInterval(ping, PING_TIME * 1000);

    /* while (true) {
        console.log("En linea...");
        sleep(10 * 2000); // sleep for 10 seconds  
        io.emit('serviceline', "En linia");
    } */
}

