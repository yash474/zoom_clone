# Plan Of Action 
    
😎  -> Initialize the nodejs project ✔
    -> Initialize out first view ✔
    -> create a room id ✔
    -> add the ability to view our own video
    -> add the ability to allow other to stream their video
    -> add styling
    -> add ability to create message
    -> add mute button
    -> add stop video button
    ->
    ->

Prerequisite :
    - npm init : to initilize our node js application
    - npm install express : It is designed for building web applications and    APIs. It has been called the de facto standard server framework for Node.js
    - npm install -g nodemon : it will install node server "-g" specifys that it will install globally so that we can use it anywhere
    - nodemon server.js : use to run the server
    { note : "nodemon server.js" would might throw error " File C:\Users\pandey\AppData\Roaming\npm\nodemon.ps1 cannot be loaded because running scripts is disabled on this system" so for that run cmd as " Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope CurrentUser " and problem would resolved }
    
    - to check our project is working or --> browser --> "localhost:port_number" (http://localhost:3030/)

    - now we also have to install ejs using ---> npm install ejs 
        :: ejs ( embeded java script use to get variables from back end to front end )

    - npm install uuid :: this we had installed because we have to generate unique room id

