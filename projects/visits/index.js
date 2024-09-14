//express application to record visitor counts

//import express and redis
const express = require('express');
const redis = require('redis');
const process = require('process');

// create express app
const app = express()

const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});


// initialize visitor count to 0
client.set("visitor_count", 0)

// setup / route on app
app.get('/', (req, res) => {
    // process.exit(0); //: this will cause the program to exit with status code of 0 when / route
    client.get('visitor_count', (err, visitor_count) => {
        res.send("Number of visitors: " + visitor_count);
        client.set('visitor_count', parseInt(visitor_count) + 1);
    });

});

app.listen(4000, ()=> {
    console.log("listening on port 4000");
})