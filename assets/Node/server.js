const http = require("http");
const router = require("./router");

const server = http.createServer(router);

server.listen(3000, function(){
    console.log("Ich 3mbalush auf http://localhost:3000")});