//const exp = require('constants');
const express = require('express');
const { get } = require('http');

const app = express();      //creating an app instance
const port = 5001;

app.use(express.static('server/public'));   //.use is a method 

const pizza = require('./modules/quoteList');   //requiring quoteList module - called 'pizza' to demonstrate the name is just made up

app.listen(port, () => {                        // open up our server on port 5001
    console.log('listening on port, ', port);
});

app.get('/quotes', function(req, res) {
    console.log("request for /quotes was made");
    res.send(pizza);    // if we don't send a response it will load FOREVER
    //res.sendStatus(418);     // means everythings is ok
} );






// control + c closes the server

// C - post 
// R - get 
// U - put 
// D - delete 