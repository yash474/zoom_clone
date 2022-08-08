// initialize the express application
const express = require( 'express');
const app = express(); 

// now create our server that will going to run
const server = require('http').Server(app) ;

// now we have to specify the view engine as ejs
app.engine( 'view engine' , 'ejs' );

// first url that willbe going to hit
app.get( '/' , ( req , res) => {
    // below line say which file we want to render
    res.render('room')
})

// specify on which port it will run
server.listen(3030);