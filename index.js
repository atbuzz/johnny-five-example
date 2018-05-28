var five = require("johnny-five"); // Imports the 'johnny-five' package from Node.
var board = new five.Board(); // Creates a 'Board'. (the Arduino board)

board.on("ready", function(){ // Called when the board is 'ready'.
  console.log("Ready."); // Logs to the console that the board is ready.

  var led = new five.Led(13); // Creates an 'Led' to control the LED on the Arduino.
  led.blink(500); // Tells the LED to blink.
});

module.exports = {
  five: five,
  board: board,
}
