//this is an IFFE below:
(function(){
"use strict";

//function declaration

function sayHello (){
    return "hello world";
}

console.log(sayHello);

//function expression

var sayHello = function() {
    return "hello world";
};

var greeting = sayhello ();
console.log(greeting);

//

function add(a,b){
    return a + b;
}

//be more specific by

function add(a,b){
    return Number(a + b);
}

//

var multiply = function (a,b){
    return Number(a*b);
};

//if multiple scripts are linked to an HTML, the last script
//(or most recent) will override all other scripts and give the
//current variable data and functions.

//IIFE SYNTAX
(function() {
    var _____ = "";
})();

//also take note that the entire script must also be wrapped in an IIFE

//variables set inside of a function ONLY exist INSIDE the function.
//if we set the variable outside of the function, it is accessible
//within that script.  if we use it inside the IFFE it will not be
//globally accessible.


//    variable stores what user had for lunch
var lunch = prompt('What did you have for lunch?');

    //function concatenates string- return string
    function digest(food){
        return "not " + food + " anymore";
    }

//    call function, pass in argument, log results in console
    console.log(digest(lunch));


//ask user for password
var password = prompt("Please enter your password");

//function call shows hidden copy of password
function hidePassword(pass){
    var fullPassword = pass.substring(0,pass.length);

    // console.log(fullPassword) ------ this is used to verify work
    var hiddenPassword = pass.replace(fullPassword,"_");
    return "Your password is " + hiddenPassword;
}

console.log(hidePassword(password));





//    this is the end of the IFFE below
});
