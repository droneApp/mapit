const express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    config = require('../config.js'),
    cors = require('cors'),
    bebop = require('node-bebop')

const app = express();

const drone = bebop.createClient();

const port = 3000;



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

// endpoints
app.post('/launch-5-land', tests.launch_5_land)
app.post('/launch-left-land', tests.launch_left_land)
app.post('/evasive', tests.evasive)




app.listen(3000, function() {
    console.log(`Connected on port ${port}`)
})
