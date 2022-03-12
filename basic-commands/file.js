const fs = require("fs");
/*
        

//@WriteFile

//fs.writeFile("./names.txt",data,(err)=>console.log("completed"))
// fs.writeFile("./backup/names.txt",data,(err)=>console.log("completed"))
//Task 1
// const data = "Live more, worry less";
// for(let i=1; i<=10; i++){
//     fs.writeFile(`./backup/text-${i}.html`,data,(err)=>console.log(`text-${i}.html -- completed`))
// }


//Task 2 -- Getting number of files counts from user


// const readline = require("readline");
// const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
// rl.question('Enter the number', function (number) {
//     limit = number;
//     // for (let i = 1; i <= limit; i++) {
//     //     fs.writeFile(`./backup/text-${i}.html`, data, (err) => console.log(`text-${i}.html -- completed`))
//     // }
//     rl.close()
// });


const [,,limit] = process.argv;
const data = "Live more, worry less";

for(let i=1; i<=limit; i++){
        fs.writeFile(`./backup/text-${i}.html`,data,(err)=>console.log(`text-${i}.html -- completed`))
    }
//************************************************************

//Reading files

fs.readFile('./cool.html', "utf-8", (err, contentOfFile) => {
    if (err) {
        console.error(err)
        return; // Will stop the function here
    };
    console.log(contentOfFile)
})

//@Append files

const addData = "Dream bigger";
fs.appendFile("./fun.html","\n" + addData,(err)=>console.log("Done"))



//@unlink files
fs.unlink("./fun.html",(err)=>console.log("deleted"))

//************************************************************
*/

//@read directory files

// const [,,limit] = process.argv;
// const data = "Live more, worry less";

// for(let i=1; i<=limit; i++){
//         fs.writeFile(`./backup/text-${i}.html`,data,(err)=>console.log(`text-${i}.html -- completed`))
//     }
    let ab  
fs.readdir("./backup",(err,files)=>{ab = files;
ab.forEach((file)=>fs.unlink(`./backup/${file}`,(err)=>console.log(file , "--deleted")) )
})

