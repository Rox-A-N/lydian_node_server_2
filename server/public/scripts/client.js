$(document).ready(onReady);

function onReady(){
    getQuotes();
    $('#submit').on('click', postQuotes);
}

let newQuote = {
    text: "big gulps, eh? welp, seeya later",       // key: text, value: "quote"
    author: "lloyd christmas",
}

function postQuotes() {
    // create a POST request and log out the response
    $.ajax({
        method: 'POST',     // this IS the request to post
        url: '/quotes',
        data: newQuote,
    }).then(function(response){         // heres where we catch that response, thumbs up ok
        console.log('post request response', response);
       // get the updated array
       getQuotes();
    }).catch(function(error){
        console.log(error);
    });
}

function getQuotes(){
    // this where we GET quotes from our server
    $.ajax({                  // method available through jquery- ajax request
        method: 'GET',         // get method on the url
        url: '/quotes',       // where do you want action to happen
    }).then(function(response){ // response from server
        console.log( 'response from the server', response);
        appendToDom(response);
    });
} 

function appendToDom(array){
    console.log( 'appendToDom Function', array);
    $('#output').empty();   // without empty the whole thing will load, duplicating arrays on the DOM
    for(let item of array){         // for of loop to append response to the DOM: loops thru array quoteList = []
        $('#output').append(`
        <li>"${item.text}" said by ${item.author}</li>
        `)
    }

}