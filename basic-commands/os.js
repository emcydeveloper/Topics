

const os = require("os");
console.log("Total memory of ram: ", os.totalmem()  / 1024 / 1024 / 1024);
console.log("Free Ram memory", os.freemem() / 1024 / 1024 / 1024);
console.log("OS Version", os.version());
console.log("OS CPU", os.cpus());

// var ramMemInGB = os.totalmem() / 1024 / 1024 / 1024;
// console.log("Total memory of ram: ", ramMemInGB);cls
