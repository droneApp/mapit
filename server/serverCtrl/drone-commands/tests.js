// this endpoint will excecute a take off, forward flight, backward flight, then landing

const bebop = require('node-bebop')
const fly = require ('../basic_flight')
var app = require('../../server.js')




module.exports = {


  launch_5_land: function (req, res){
    // create client
    console.log("LAUNCH 5 LAND : INITIATED")

    const drone = bebop.createClient()
    drone.connect(function() {

      drone.takeOff();
      // lands the drone after 5 seconds
      setTimeout(function() {
        drone.land();
      }, 5000);
    // end of connect
    });


    res.status(200).send("Fuckin neato.")
  },










  launch_left_land: function (req, res) {
    // create client
    console.log("LAUNCH LEFT LAND : INITIATED")

    const drone = bebop.createClient()
    drone.connect(function() {
      drone.takeOff();
      // moves the drone left at speed 3 after 3 seconds


      setTimeout(function() {
        // try changing this number to change the speed
        drone.left(3);
      }, 2000);

      // stops
      setTimeout(function() {
        drone.stop();
      }, 4000);

      // lands the drone after 5 seconds
      setTimeout(function() {
        drone.land();
      }, 5000);

    // end of connect
    });
    res.status(200).send("Fuckin neato.")
  },










  evasive: function (req, res) {
    console.log("Taking evasive action")
    var drone = bebop.createClient();

    drone.connect(function() {
      drone.takeOff();

      setTimeout(function() {
        drone.right(5);
      }, 3000);

      setTimeout(function() {
        drone.stop();
      }, 4000);

      setTimeout(function() {
        drone.left(5);
      }, 5000);

      setTimeout(function() {
        drone.stop();
      }, 6000);

      setTimeout(function() {
        drone.land();
      }, 7000);
    // end of connect
    });
  res.status(200).send("Fuckin neato.")

  }















// end of exports
}
