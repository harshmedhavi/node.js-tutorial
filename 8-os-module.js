const os = require('os');

//info about user
const user = os.userInfo();
console.log(user);

//method returning system uptime in seconds
console.log(os.uptime()); 

//More methods inside os module
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);