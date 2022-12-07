//const exp = require('constants');
const express = require('express');
// const { get } = require('http');

const app = express();      //creating an app instance
const port = 5001;

app.use(express.static('server/public'));   //.use is a method  -serving up html
app.use(express.urlencoded());  // express has a method call URLencoded to say we want to pass data alon

const quoteList = require('./modules/quoteList');   //requiring quoteList module - can be called 'pizza' to demonstrate the name is just made up
const quoteRouter = require('./routes/quotes_router');   // naming convention to call it something_router

app.use('/quotes', quoteRouter);    // the /quotes route, go see the quoteRouter

app.listen(port, () => {                        // open up our server on port 5001
    console.log('listening on port, ', port);
});








// control + c closes the server

// C - post 
// R - get 
// U - put 
// D - delete 