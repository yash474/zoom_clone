const socket = io('/');
// getting the video element from html
const videoGrid = document.getElementById( 'video-grid'); 
// vreating video element 
const myVideo = document.createElement( 'video') ;
myVideo.muted = true ;



var peer = new Peer( undefined , {
    path: '/peerjs' ,
    host: '/' ,
    port: '3030'  
});

let myVideoStream

// this will ask user to audio&video access
navigator.mediaDevices.getUserMedia( {
    video: true ,
    audio: true
}).then( stream => {
    myVideoStream=stream;
    addVideoStream( myVideo , stream );

    socket.on( 'user-connected' , ( userId ) => {
        connectToNewUser( userId , stream );
    })
    
} ) ;


peer.on( 'open' , id => {
    
    socket.emit( 'join-room' , ROOM_ID , id );
} )




const connectToNewUser = ( userId) => {
    console.log( userId);
    const call = peer.call(userId, stream)
  const video = document.createElement('video')
  call.on('stream', userVideoStream => {
    addVideoStream(video, userVideoStream)
  })
}

function addVideoStream  ( video , stream ) {
    video.srcObject = stream 
    video.addEventListener( 'loadedmetadata' , () => {
        video.play() 
    })
    videoGrid.append( video )
}

