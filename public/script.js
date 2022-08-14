

let myVideoStream

// vreating video element 
const myVideo = document.createElement( 'video') ;
myVideo.muted = true ;

// getting the video element from html
const videoGrid = document.getElementById( 'video-grid'); 


// this will ask user to audio&video access
navigator.mediaDevices.getUserMedia( {
    video: true ,
    audio: true
}).then( stream => {
    myVideoStream=stream;
    addVideoStream( myVideo , stream );
} ) ;

function addVideoStream  ( video , stream ) {
    video.srcObject = stream 
    video.addEventListener( 'loadedmetadata' , () => {
        video.play() 
    })
    videoGrid.append( video )
}

