module.exports = {
    takeOff: function(req, res) {
        drone.connect(function() {
            drone.Piloting.takeOff().then(drone.stop());
        });
    },
    land: function(req, res) {
        drone.Piloting.land();
    },
    flyUp: function(req, res) {
        drone.up(val).then(drone.stop());
    },
    flyDown: function(req, res) {
        drone.down(val).then(drone.stop());
    },
    flyRight: function(req, res) {
        drone.right(val).then(drone.stop());
    },
    flyLeft: function(req, res) {
        drone.left(val).then(drone.stop());
    },
    flyForward: function(req, res) {
        drone.forward(val).then(drone.stop());
    },
    flyBackward: function(req, res) {
        drone.backward(val).then(drone.stop());
    },
    flyClockwise: function(req, res) {
        drone.clockwise(val).then(drone.stop());
    },
    flyCounterClockwise: function(req, res) {
        drone.counterClockwise(val).then(drone.stop());
    },
    picture: function(req, res) {
        drone.takePicture();
    },
    video: function(req, res) {
        
    }

}