//To create a package.json file or initialize a node js project, you need to run commmand
// "npm init"

// JSON stands for Javascript Object Notation, It is a format of data
// which is used to transfer the data from server to client, or client to server

// fs - File System
//To Read a File - readFile(synchronous), readFileSync(asynchronous)

//Homework- wirteFile, writefileSync
// const fileSystem = require("fs");

// console.log("Before");
// fileSystem.readFile("hassann.txt", "utf-8", (err, data) => {
//   console.log("Error:", err);
//   console.log("Data:", data);
// });
// console.log("After");

const http = require("http");
//Hypertext transfer protocol (secured)

const hostname = "127.0.0.1"; //localhost
const port = 3000;

//createServer()
const server = http.createServer((req, res) => {
  res.statusCode = 200; //for later
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello</h1>");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//server.listen(port, hostname, successCallback)
