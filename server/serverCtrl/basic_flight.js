


module.exports = {
    takeOff: function(req, res) {
        drone.connect(function() {
            console.log('the drone connects and takes off')
            drone.Piloting.takeOff().then(drone.stop());

        }).then(resp => {
          res.status(200).send('took off')


        });
    },




    land: function(req, res) {

        console.log('The drone lands')
        drone.Piloting.land();
    },




    flyUp: function(req, res) {
        console.log('the drone flys up by')
        console.log(req)
        drone.up(val).then(drone.stop());
    },



    flyDown: function(req, res) {
        console.log('the drone goes down by')

        console.log(req)
        drone.down(val).then(drone.stop());
    },




    flyRight: function(req, res) {
        console.log('the drone goes right by')

        console.log(req)

        drone.right(val).then(drone.stop());
    },



    flyLeft: function(req, res) {
        console.log('the drone goes left by:')
        console.log(req)
        drone.left(val).then(drone.stop());
    },



    flyForward: function(req, res) {

        console.log('the drone goes forward by:')
        console.log(req)
        drone.forward(val).then(drone.stop());
    },



    flyBackward: function(req, res) {
        console.log('the drone goes back by:')
        console.log(req)
        drone.backward(val).then(drone.stop());
    },




    flyClockwise: function(req, res) {
        console.log('the drone goes clockwise by:')
        console.log(req)
        drone.clockwise(val).then(drone.stop());
    },



    flyCounterClockwise: function(req, res) {
      console.log('the drone goes counterClockwise by:')
      console.log(req)
        drone.counterClockwise(val).then(drone.stop());
    },



    picture: function(req, res) {
        drone.takePicture();
    },
    video: function(req, res) {

    }

}
