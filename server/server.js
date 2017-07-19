const express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    config = require('../config.js'),
    cors = require('cors'),
    bebop = require('node-bebop');

const app = express();

const drone = bebop.createClient();

const port = 3000;

const controller = require('./serverCtrl/drone-commands/manual_control.js')

// test commands constant
const tests = require('./serverCtrl/drone-commands/tests.js')

//controllers//

//massive configuration for the server//

app.use(bodyParser.json());

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: config.secret
}));

app.use(express.static('./src'));



// postman test endpoints

app.post('/launch-5-land', tests.launch_5_land)

// this endpoint moves the drone to the left.
// try changing up the speed in the tests.js file
app.post('/launch-left-land', tests.launch_left_land)

// this endpoint goes right then left then lands
app.post('/evasive', tests.evasive)


// testing bi directional control input
app.post('/bi', tests.biDirectional)

//endpoints for manual controller
app.post('/drone/space', controller.takeOff)
app.post('/drone/shift', controller.land)
app.post('/drone/w', controller.flyUp)
app.post('/drone/s', controller.flyDown)
app.post('/drone/a', controller.flyLeft)
app.post('/drone/d', controller.flyRight)
app.post('/drone/i', controller.flyForward)
app.post('/drone/k', controller.flyBackwards)
app.post('/drone/j', controller.flyCounterClockwise)
app.post('/drone/l', controller.flyClockwise)
app.post('/drone/f', controller.picture)
app.post('/drone/h', controller.videoOn)
app.post('/drone/g', controller.videoOff)








app.listen(3000, function() {
    console.log(`Connected on port ${port}`)
})
