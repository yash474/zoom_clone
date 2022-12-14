// initialize the express application
const express = require('express');
const app = express();

// now create our server that will going to run
const server = require('http').Server(app);

const io = require('socket.io')(server)
// import the uuid here
// const { verson_number:uuid4 }=require('lybrary_name') ;
const { v4: uuidv4 } = require('uuid');

const { ExpressPeerServer } = require('peer');
const peerServer = ExpressPeerServer(server, {
    debug: true
});

app.use('/peerjs', peerServer);

// now we have to specify the view engine as ejs
app.set('view engine', 'ejs');

// specifying that or public file will be here
app.use(express.static('public'));

// first url that willbe going to hit -- localhost:3030 ; it is main router
app.get('/', (req, res) => {
    res.redirect(`/${uuidv4()}`);
})

// now we will create a link , so "/:room" --> it is a parameter 
app.get('/:room', (req, res) => {
    // below line say which file we want to render
    res.render('room', { roomId: req.params.room } /*this is parameter in which we will get room id*/);
});

io.on('connection', socket => {
    socket.on('join-room', (roomId, userId) => {
        // console.log( userId)
        socket.join(roomId)
        socket.broadcast.to(roomId).emit('user-connected', userId)

    })

})

// specify on which port it will run
server.listen(3030);
