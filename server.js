const express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    config = require('./config.js'),
    cors = require('cors'),
    bebop = require('node-bebop');

const app = express();

const drone = bebop.createClient();

const port = 3000;

//controllers//

//massive configuration for the server//

app.use(bodyParser.json());

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: config.secret
}));

app.use(express.static('./src'));

app.listen(3000, function() {
    console.log(`Connected on port ${port}`)
})