// import express
const express = require('express')

// create an express app
const app = express()

// create a route for / 
app.get('/', (req, res) => {
    res.send("Hello world I am working");
});

// create a port to listen on 
app.listen(8080, ()=> {
    console.log("Listening on port 8080");
});
