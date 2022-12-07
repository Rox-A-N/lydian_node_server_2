let express = require('express');
let router = express.Router();  // router is defined, so we can use router.method (hit the gas, don't understand the engine)


router.get('/quotes', function(req, res) {     // express route to get quotes
    console.log("request for /quotes was made");
    res.send(quoteList);    // if we don't send a response it will load FOREVER - will only send quoteList
    //res.sendStatus(418);     // means everythings is ok
} );

router.post('/quotes', function(req, res) {    // the / (whack) here isn't being used to access a route, it just is?
    console.log('in the post request!', req.body);
    if(req.body.text && req.body.author) {
        quoteList.push(req.body);
        res.send(201)   // 201 means created
    } else {
        res.sendStatus(500);    // 500 says there is an error here
    }
    // console.log('New Quotes', quoteList);
});

module.exports = router;