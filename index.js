var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function(){
  console.log("Ready.");

  var led = new five.Led(13);
  led.blink(500);
});
