// *SET UP EXPRESS APP and various modules
const Joi = require('joi');
const express = require('express');
const app = express();
const config = require('config');
const startupDebug = require('debug')('app:startup');


// *SET TEMPLATING
app.set('view engine', 'pug');
app.set('views', './views'); // set the directory for views

// *MIDDLEWARE
// Adding Middleware to use JSON processing in POST , e.g. req.body.name
app.use(express.json());

// Custom Middleware. Middleware functions are called in sequence
// Abstracting middleware code into separate module
app.use(require('./middleware'));

app.use(function(req,res,next){
    console.log('Authenticating...');
    next();
});

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

// *ENVIRONMENT
console.log(`NODE_ENV: ${process.env.NODE_ENV}`); // returns undefined if not set
console.log(`app: ${app.get('env')}`);

// app.get('env') will return 'development' by default
if(app.get('env') === 'development'){
    console.log("In development mode");
    startupDebug('Logging debug message in development mode...');
}

// WINDOWS: `set NODE_ENV=production` in cli to set environment

// *CONFIGURATION
console.log('Application Name: ' + config.get('name'));
console.log('Password: ' + config.get('someProperties.password'));

// *SET UP PORT
const port = process.env.PORT || 3000;

app.listen(port);

// IMPORT ROUTES
const dataApp = require('./routes/data');
app.use('/api/mockdata', dataApp);

const home = require('./routes/home');
app.use('/', home);