module.exports = {
    takeOff: function(req, res) {
        drone.connect(function() {
            drone.takeOff();
        });

    },
    land: function(req, res) {
        drone.land();
    }
}