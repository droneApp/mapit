const bebop = require('node-bebop');
const drone = bebop.createClient();


module.exports = {
    takeOff: function(req, res) {
        drone.connect(function() {
            console.log('the drone connects and takes off')
            drone.takeOff().then(drone.stop());

        }).then(resp => {
          res.status(200).send('took off')


        });
    },




    land: function(req, res) {

        console.log('The drone lands')
        drone.land();
    },




    flyUp: function(req, res) {
        console.log('the drone flys up by')
        console.log(req)
        drone.up(50).then(drone.stop());
    },



    flyDown: function(req, res) {
        console.log('the drone goes down by')

        console.log(req)
        drone.down(50).then(drone.stop());
    },




    flyRight: function(req, res) {
        console.log('the drone goes right by')

        console.log(req)

        drone.right(50).then(drone.stop());
    },



    flyLeft: function(req, res) {
        console.log('the drone goes left by:')
        console.log(req)
        drone.left(50).then(drone.stop());
    },



    flyForward: function(req, res) {

        console.log('the drone goes forward by:')
        console.log(req)
        drone.forward(50).then(drone.stop());
    },



    flyBackward: function(req, res) {
        console.log('the drone goes back by:')
        console.log(req)
        drone.backward(50).then(drone.stop());
    },




    flyClockwise: function(req, res) {
        console.log('the drone goes clockwise by:')
        console.log(req)
        drone.clockwise(50).then(drone.stop());
    },



    flyCounterClockwise: function(req, res) {
      console.log('the drone goes counterClockwise by:')
      console.log(req)
        drone.counterClockwise(50).then(drone.stop());
    },



    picture: function(req, res) {
        drone.takePicture();
    },
    videoOn: function(req, res) {
        drone.startRecording();
    },
    videoOff: function(req, res) {
        drone.stopRecording();
    }

}
