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

  app.use(express.static('../app/build'));
//enable cross origin requests
app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})


// postman test endpoints

app.post('/launch-5-land', tests.launch_5_land)

// this endpoint moves the drone to the left.
// try changing up the speed in the tests.js file
app.post('/launch-left-land', tests.launch_left_land)

// this endpoint goes right then left then lands
app.post('/evasive', tests.evasive)


// testing bi directional control input
app.post('/bi', tests.biDirectional)


const manualMotions = require('./serverCtrl/drone-commands/manualControl/movements.js')
// manual stop
app.post('/stop', manualMotions.stop)


// manual control launch, pan, and land movements
app.post('/connect', manualMotions.connect)
app.post('/launch', manualMotions.launch)
app.post('/land', manualMotions.land)

// pan commands
app.post('/pan-left', manualMotions.pan_left)
app.post('/pan-back', manualMotions.pan_back)
app.post('/pan-right', manualMotions.pan_right)
app.post('/pan-forward', manualMotions.pan_forward)

// up down and rotate commands
app.post('/up', manualMotions.up)
app.post('/down', manualMotions.down)
app.post('/rotate-right', manualMotions.rotate_right)
app.post('/rotate-left', manualMotions.rotate_left)

// keyboard x-axis
app.post('/key-pan-left', manualMotions.a_pan_left)
app.post('/key-pan-back', manualMotions.s_pan_back)
app.post('/key-pan-right', manualMotions.d_pan_right)
app.post('/key-pan-forward', manualMotions.w_pan_forward)

// keyboard y-axis
app.post('/key-up', manualMotions.up_arrow)
app.post('/key-down', manualMotions.down_arrow)
app.post('/key-rotate-right', manualMotions.rotate_right_arrow)
app.post('/key-rotate-left', manualMotions.rotate_left_arrow)


app.listen(3000, function() {
    console.log(`Connected on port ${port}`)
})
