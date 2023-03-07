const express = require("express");
const app = express();

// Middleware-Funktionen werden über die 
// "use"-Funktion eingebunden
app.use(function(req, res, next) {
    console.log("Erste Middleware!");
    next(); // Aufruf der nächsten Middleware
});

app.use(function(req, res, next) {
    console.log("Zweite Middleware!");
    // Senden der Antwort
    res.send("Hallo Express!");
});

// Diese Middleware wird nicht mehr aufgerufen
app.use(function(req, res, next) {
    console.log("Dritte Middleware!");
});

app.listen(8042,function(){
    console.log("ich lausche auf http://localhost:8042");
});