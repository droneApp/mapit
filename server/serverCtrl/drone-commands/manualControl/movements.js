// this controller file will be responsible for the endpoint
// hit by the manual control react component



const bebop = require('node-bebop')
var app = require('../../../server.js')
const drone = bebop.createClient()



module.exports = {


  // connect: function (req, res){
  //   // create client
  //    console.log('connected with video')
  //   const drone = bebop.createClient()
  //   drone.connect(function() {
  //   })
  //   res.status(200).send("I can fly!")
   
  // },



  launch: function(req, res){

    console.log('tookoff')
    drone.connect(function(){
      drone.takeOff(function(){
        drone.stop()
      })
    })
    res.status(200).send("Launching Bebopboolopadoop.")
  


  },

  pan_left: function(req, res){

    console.log('panned left')
    drone.left(50)

    setTimeout(function() {
      drone.stop();
      console.log('stopped')
    }, 500);
  res.status(200).send("I can fly!")

  },
  pan_back: function(req, res){
    console.log('panned back')
    drone.back(50)

    setTimeout(function() {
      drone.stop();
      console.log('stopped')
    }, 500);

  res.status(200).send("I can fly!")
  },
  pan_right: function(req, res){
    console.log('panned right')
    drone.right(50)

    setTimeout(function() {
      drone.stop();
      console.log('stopped')
    }, 500);

  res.status(200).send("I can fly!")
  },
  pan_forward: function(req, res){
    console.log('panned forward')
    drone.forward(50)

    setTimeout(function() {
      drone.stop();
      console.log('stopped')
    }, 500);

  res.status(200).send("I can fly!")
  },



  up: function(req, res){
    console.log('going up')
    drone.up(50)

    setTimeout(function() {
      drone.stop();
      console.log('stopped')
    }, 500);

  res.status(200).send("I can fly!")
  },

  down: function(req, res){
    console.log('going down')
    drone.down(50)

    setTimeout(function() {
      drone.stop();
      console.log('stopped')
    }, 500);

  res.status(200).send("I can fly!")
  },

  rotate_right: function(req, res){
    console.log('rotate right')
    drone.clockwise(50)

    setTimeout(function() {
      drone.stop();
      console.log('stopped')
    }, 500);

  res.status(200).send("I can fly!")
  },

  rotate_left: function(req, res){
    console.log('rotate left')
    drone.counterClockwise(50)

    setTimeout(function() {
      drone.stop();
      console.log('stopped')
    }, 500);

  res.status(200).send("I can fly!")
  },
  stop: function(req, res){
    console.log('stopped')
    drone.stop()
    res.status(200).send("I can fly!")
  },


  land: function(req, res){
    console.log('landed')
    setTimeout(function() {
      drone.land();

    }, 100);

    setTimeout(function() {
      drone.emergency();
    }, 1300);
  res.status(200).send("I can fly!")
  },

///////////////Keyboard Specific Functions/////////////////

///Pad 1///

  // a_pan_left: function(req, res){
  //   console.log('key pan left')
  //   drone.left(10)
  //   console.log(Object.keys(drone.SpeedSettings))
  //   res.status(200).send("I'm Flying.")
  // },
  // s_pan_back: function(req, res){
  //   console.log('key pan back')
  //   drone.back(10)
  //   res.status(200).send("I'm Flying.")
  // },
  // d_pan_right: function(req, res){
  //   console.log('key pan right')
  //   drone.right(10)
  //   res.status(200).send("I'm Flying.")
  // },
  // w_pan_forward: function(req, res){
  //   console.log('key pan forward')
  //   drone.forward(10)
  //   res.status(200).send("I'm Flying.")
  // },

///Pad 2///

  // up_arrow: function(req, res){
  //   console.log('key going up')
  //   drone.up(10)
  //   res.status(200).send("I'm Flying.")
  // },
  // down_arrow: function(req, res){
  //   console.log('key going down')
  //   drone.down(10)
  //   res.status(200).send("I'm Flying.")
  // },
  // rotate_right_arrow: function(req, res){
  //   console.log('key rotate right')
  //   drone.clockwise(10)
  //   res.status(200).send("I'm Flying.")
  // },
  // rotate_left_arrow: function(req, res){
  //   console.log('key rotate left')
  //   drone.counterClockwise(10)
  //   res.status(200).send("I'm Flying.")
  // }


// end of exports
}
