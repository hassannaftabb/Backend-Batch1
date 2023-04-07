//To create a package.json file or initialize a node js project, you need to run commmand
// "npm init"

// JSON stands for Javascript Object Notation, It is a format of data
// which is used to transfer the data from server to client, or client to server

// fs - File System
//To Read a File - readFile(synchronous), readFileSync(asynchronous)
const fileSystem = require("fs");

console.log("Before");
fileSystem.readFile("hassann.txt", "utf-8", (err, data) => {
  console.log("Error:", err);
  console.log("Data:", data);
});
console.log("After");
