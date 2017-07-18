// this controller file will be responsible for the endpoint
// hit by the manual control react component



const bebop = require('node-bebop')
var app = require('../../../server.js')
const drone = bebop.createClient()



module.exports = {


  connect: function (req, res){
    // create client
    const drone = bebop.createClient()
    drone.connect(function() {
    res.status(200).send("Fuckin neato.")
  })
  },



  launch: function(req, res){

    console.log('tookoff')
    drone.connect(function() {
    drone.takeOff(drone.stop)

    res.status(200).send("Launching Bebopboolopadoop.")
  })


  },

  pan_left: function(req, res){

    console.log('panned left')
    drone.left(50)

    setTimeout(function() {
      drone.stop();
      console.log('stopped')
    }, 500);


  },
  pan_back: function(req, res){
    console.log('panned back')
    drone.back(50)

    setTimeout(function() {
      drone.stop();
      console.log('stopped')
    }, 500);


  },
  pan_right: function(req, res){
    console.log('panned right')
    drone.right(50)

    setTimeout(function() {
      drone.stop();
      console.log('stopped')
    }, 500);


  },
  pan_forward: function(req, res){
    console.log('panned forward')
    drone.forward(50)

    setTimeout(function() {
      drone.stop();
      console.log('stopped')
    }, 500);


  },



  up: function(req, res){
    console.log('going up')
    drone.up(50)

    setTimeout(function() {
      drone.stop();
      console.log('stopped')
    }, 500);


  },

  down: function(req, res){
    console.log('going down')
    drone.down(50)

    setTimeout(function() {
      drone.stop();
      console.log('stopped')
    }, 500);


  },

  rotate_right: function(req, res){
    console.log('rotate right')
    drone.left(50)

    setTimeout(function() {
      drone.clockwise();
      console.log('stopped')
    }, 500);


  },

  rotate_left: function(req, res){
    console.log('rotate left')
    drone.counterClockwise(50)

    setTimeout(function() {
      drone.stop();
      console.log('stopped')
    }, 500);


  },
  stop: function(req, res){
    console.log('stopped')
    drone.stop()
  },


  land: function(req, res){
    console.log('landed')
    setTimeout(function() {
      drone.land();
      console.log('stopped')
    }, 100);


  }


// end of exports
}
