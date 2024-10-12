// This is a simple java express server
const express = require("express")

// create an instance of the application with express
const app = express()

// create a method to handle / route

app.get('/', (req, res) => {
    res.send("Hello world the application works");
});

app.listen(8080, () => {
    console.log("listening on port 8080");
});
