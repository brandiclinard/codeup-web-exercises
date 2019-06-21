
"use strict";

/*********JAVASCRIPT BOM NOTES*/


//-- whenever you run the setInterval() it returns an interval ID to you.

// this code will produce a console log every second
// when count >= max, the interval is cancelled, and the logging will stop

var count = 0;
var max = 10;
var interval = 1000; // interval time in milliseconds

var intervalId = setInterval(function () {
    if (count >= max) {
        clearInterval(intervalId);
        console.log('All done');
    } else {
        count++;
        console.log('Repeating this line ' + count);
    }
}, interval);

var intervalId2 = setInterval(function(){
    console.log("hello")
},1000);

//-- can clear the interval from the console by inputting clearInterval(intervalId#)-- this will return undefined

function sayHello (){
    console.log("hello");
}

//NOW YOU CAN USE YOUR FUNCTION IN THE INTERVAL

var intervalId2 = setInterval(sayHello, 1000);

// not add the "()" at the end of the function inside the interval applies the interval to the entire sayHello function instead of the output of the function itself

// placing clearInterval(intervalId2) below the function but above the var intervalId2 will duplicate both... within the function it will work and then continue on... can place at the bottom and an endless loop will occur... you will have to clear by inputting clearInterval() ONLY.  No ID is given.

//more common is the setTimeout() because it is safer and delays and ends

var delay = 5000; // delay time in milliseconds

var timeoutId = setTimeout(function () {
    alert('Here is a delayed hello!');
}, delay);

// to cancel the timeout, you can call
// clearTimeout(timeoutId);
// prior to the delay expiring

//-- you do not have to clear this and it will no repeat itself.  occurs once and that is it.

//refactored:

function delayHello(){
    alert('here is a delayed hello');
}
var delay = 5000;

var timeoutId = setTimeout(delayHello, delay);


//-- LOCATION OBJECT----

function delayHello(){
    alert('redirecting you to codeup');
    window.location = "https://java.codeup.com";
}

// accessible through both window object and the document object.  used to redirect the browser.

//------RELOAD PAGE-----

var count = 0;
var max = 10;
var interval = 1000; // interval time in milliseconds

var intervalId = setInterval(function () {
    if (count >= max) {
        clearInterval(intervalId);
        console.log('All done');
    } else {
        count++;
        console.log('Repeating this line ' + count);
    }
}, interval);

function delayHello(){
    alert('redirecting you to codeup');
    location.reload();
}
var delay = 5000;

var timeoutId = setTimeout(delayHello, delay);

// we would get the alert and then it would reload.  after that if we refreshed the browser it would reload the page every 5 seconds. in this case the location.reload() is reloading the browser itself. RELOAD think REFRESH.

//location.reload(true) is utilized to reload from the server-- only applies with backend javascript

