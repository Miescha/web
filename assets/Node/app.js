const express = require("express");
const app = express();


app.listen(8042,function(){
    console.log("Ich lausche auf http://localhost:8042");
});

let router = function(request,response){
    let url = request.url;
    let methode = request.method;
    const html = require("./template");
    response.writeHead(200);
    if(url.endsWith("/feedbacks") && methode === "GET"){
        response.end(html("Liste der Feedbacks"));
    }
    else response.end(html("Methode: " + methode + " URL: " + url ));
};

module.exports = router;
// Einbinden des "wuerfel"-Moduls: "./wuerfel.js" ist der relative Dateipfad, unter
// welchem das Modul gesucht wird
//const wuerfel = require("./wuerfel.js");
// Ausgabe: Eine Zahl zwischen 1 und 6
//console.log(wuerfel.x());
// Ausgabe: "TypeError: wuerfel.getRandomNumber is not a function".
// Grund: getRandomNumber ist nicht Teil der öffentlichen Schnittstelle des Moduls
//console.log(wuerfel.y(1, 1000));
/*
const http = require("http");
const fs = require("fs");
http.createServer(function(request,response){
    response.writeHead(200);

    fs.readFile("welcome.html", function(err,data){
        response.end(data);
    });
    
}).listen(8080, function(){
    console.log("Ich 3mbalush auf http://localhost:8080");
});*/
