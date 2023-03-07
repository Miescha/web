const getRandomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    };
    // Gibt eine zufällige Zahl zwischen 1 und 6 (inklusive) zurück
    const rollTheDice = function() {
    return getRandomNumber(1, 6);
    };
    // Die Funktion "rollTheDice" wird unter dem Namen "wuerfle" Teil der öffentlichen
    // Schnittstelle des Moduls
    module.exports.george = rollTheDice;
    module.exports = {
        x: rollTheDice,
        y:getRandomNumber
    };
