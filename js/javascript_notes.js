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


/* conditional notes *******************************************************************************************************/

//    to use conditionals in functions: I want to build a function that returns a string when I pass a number as an arguement.

    function isItANumber(parameter) {
        if (isNaN(parameter) === false) {
            return "That's a number!"
        }
    }

    console.log(isItANumber(77)); // That's a number!
    console.log(isItANumber(BOB)); // undefined

    // if else statments

    //if i owned one, id get milk from my cow when i ran out. but since i dont, ill go to the store instead.

    var haveCow = false;

    if (haveCow) {
        console.log("Milking Bessie.")
    } else {
        console.log("Going to Kroger.")
    }

    //boolean if else (unless otherwise defined by changing the value with boolean operator; this is best practice

    // if (){
    //     true
    // } else {
    //     false
    // }


//expand previous isItANumber fn.  i want to also return string when we arent passed a number. how do i refactor our function?

    function isItANumber(parameter) {
        if (isNaN(parameter) === false) {
            return "That's a number!"
        } else {
            return "That is not a number..."
        }
    }


    // if/else if/else = can continue on until all conditions have been described.

    //if i owned a cow, id get milk from it when i ran out. but since i dont, i could go to the store, but luckily, i own a goat, so i can get milk from it instead.


    var haveCow = false;
    var haveGoat = true;

    if (haveCow === true) { // be explicit to ensure there is no confusion
        console.log("milking betty");
    } else if (haveGoat === true) { // again with explicit
        console.log("milking billy sue");
    } else {
        console.log("going to albertson's")
    }

    //make a fn that takes in number and will return three different strings for an arguement lesser than, greater than, or equal to 35

    function isThisThirtyFive(parameter){
        if (parameter > 35) {
            return "the number" + parameter + " is greater than 35.";
        } else if  (parameter < 35) {
            return "the number" + parameter + " is greater than 35.";
        } else if (parameter === 35) {
            return "that is 35!";
        } else {
            return "that is not a number.";
        }
    }

    console.log(isThisThirtyFive(34));
    console.log(isThisThirtyFive(35));
    console.log(isThisThirtyFive(36));
    console.log(isThisThirtyFive('tim'));// on returns due to specificty of ===

    // Ternary operator: value based on boolean evaluation

    //writing ternary expressions:

    // var message = (booleanValue) ? "operation was true." : "operation was false.';

    // only two options available-- keep note of that-- either true or false-- left side is true and right side is false of :

    //are we out of milk? if we are: ill head to the store, but if we do : i want to make a bowl of cereal.

    var doWeHaveMilk = false; // can change to true to alter the outcome

    var action = (doWeHaveMilk) ? "Let's make some Honey Nut Cheerios!" : "Going to Giant Eagle.";

    console.log(action);

    // change if/else version of isItANumber function. refractor as a ternary operator.

    // function isItANumber(parameter) {
    //     if (isNaN(parameter) === false) {
    //         return "That's a number!"
    //     } else {
    //         return "That is not a number..."
    //     }
    // }

        return (isNan(parameter)) ? "That's not a number..." : "that's a number!";
    //left side is true due to not having a number be what the true side evaluates out to : right side is false due to having a number evaluation

    console.log(isItANumber(17));

    //SWITCH STATEMENTS -- statement with multiple conditions that will trigger based on value of variable; best practice to use if the variable will have many
    // outcomes for different reasons--- can possibly alter to contains the string to output several cases.

    var color = prompt('What is your fav color?').toLowerCase();

    switch(color) {
        case 'green':
            alert('what a coincidence, that is my fav!');
            break;
        case 'orange':
            alert('thats my brothers fav color');
            break;
        default:
            alert(color + " is a weird color dude");
            break;
    }


    //i dont have a cow, goat or camel.  i guess ill have to go to the store for milk

    var animal = "n/a";

    switch (animal) {
        case "cow":
            console.log("Milking Betty Lynn");
            break;
        case "goat":
            console.log('Milking bertha');
            break;
        case 'camel':
            console.log("milking ophelia");
            break; // if you do not place the break-- you will fall through to the next case that matches input
        default:
            console.log("go to food lion");
            break;
    }

    //user to input their fav sandwich meat. like olive loaf we return alert congratulate them on their bold choice, and if they choose brisket we should return different alert: this one for congratulating them on the 'right' answer. all other responses should trigger an alert stating apathy.

    var lunchMeat = prompt("what is your fav sandwich meat?");

    switch(lunchMeat) {
        case "oliveloat":
            alert("Congrats on your bold choice!");
            break;
        case "brisket":
            alert("Thank you for choosing the right answer.");
            break;
        default:
            alert("Meh..." + lunchMeat + " aint my speed, but you do you.");
            break; //do not have to place default break but it is good practice
    }

//    this is the end of the IFFE below
});
