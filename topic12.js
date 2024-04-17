// console.log("hello everyone");

// const fs = require("fs");

// fs.readFile("./info.txt", "utf8", function(err, data){
//     console.log(data);
// })


// const http = require("http");

// http.createServer(function(request, response){
//     // response.writeHead(200, {"Content-type" : "text/plain" });
//     response.writeHead(200, {"Content-type" : "text/html" });

//     response.write("<h1>Hello from server</h1>");

//     response.end();
// }).listen(8000);

// console.log("Server is listening http://localhost:8000");

const {hello, sum} = require('./myfile.js');


// console.log(hello);
console.log(sum(2,2));
