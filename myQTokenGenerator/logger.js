require('colors');
const moment = require('moment');

class Logger {
    constructor() {
        this.timestamp = new Date();
    }

    info(msg) {this.write(msg, "info");}
    error(msg) {this.write(msg, "error");}
    warn(msg) {this.write(msg, "warn");}

    write(message, level) {
        let timeStamp = moment(new Date()).format('h:mm:ss a')
        switch (level) {
            case "info":
                console.log(`Info (${timeStamp}): `.green + message)
                break;
            case "error":
                console.error(`Error (${timeStamp}): `.red + message);
                break;
            case "warn":
                console.log(`Info (${timeStamp}): `.yellow + message);
        }
    }
}

module.exports = Logger;