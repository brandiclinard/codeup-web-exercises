//this is an IFFE below:
(function(){
    //the rest of the IFFE is at the very end of the script
"use strict";

//function declaration

// function sayHello (){
//     return "hello world";
// }
//
// console.log(sayHello);
//
// //function expression
//
// var sayHello = function() {
//     return "hello world";
// };
//
// var greeting = sayhello ();
// console.log(greeting);
//
// //
//
// function add(a,b){
//     return a + b;
// }
//
// //be more specific by
//
// function add(a,b){
//     return Number(a + b);
// }
//
// //
//
// var multiply = function (a,b){
//     return Number(a*b);
// };

//if multiple scripts are linked to an HTML, the last script
//(or most recent) will override all other scripts and give the
//current variable data and functions.

//IIFE SYNTAX
// (function() {
//     var _____ = "";
// })();

//also take note that the entire script must also be wrapped in an IIFE

//variables set inside of a function ONLY exist INSIDE the function.
//if we set the variable outside of the function, it is accessible
//within that script.  if we use it inside the IFFE it will not be
//globally accessible.


//    variable stores what user had for lunch
// var lunch = prompt('What did you have for lunch?');
//
//     //function concatenates string- return string
//     function digest(food){
//         return "not " + food + " anymore";
//     }
//
// //    call function, pass in argument, log results in console
//     console.log(digest(lunch));
//
//
// //ask user for password
// var password = prompt("Please enter your password");
//
// //function call shows hidden copy of password
// function hidePassword(pass){
//     var fullPassword = pass.substring(0,pass.length);
//
//     // console.log(fullPassword) ------ this is used to verify work
//     var hiddenPassword = pass.replace(fullPassword,"_");
//     return "Your password is " + hiddenPassword;
// }
//
// console.log(hidePassword(password));


/* conditional notes *******************************************************************************************************/

//    to use conditionals in functions: I want to build a function that returns a string when I pass a number as an arguement.

    // function isItANumber(parameter) {
    //     if (isNaN(parameter) === false) {
    //         return "That's a number!"
    //     }
    // }
    //
    // console.log(isItANumber(77)); // That's a number!
    // console.log(isItANumber(BOB)); // undefined
    //
    // // if else statments
    //
    // //if i owned one, id get milk from my cow when i ran out. but since i dont, ill go to the store instead.
    //
    // var haveCow = false;
    //
    // if (haveCow) {
    //     console.log("Milking Bessie.")
    // } else {
    //     console.log("Going to Kroger.")
    // }

    //boolean if else (unless otherwise defined by changing the value with boolean operator; this is best practice

    // if (){
    //     true
    // } else {
    //     false
    // }


//expand previous isItANumber fn.  i want to also return string when we arent passed a number. how do i refactor our function?

    // function isItANumber(parameter) {
    //     if (isNaN(parameter) === false) {
    //         return "That's a number!"
    //     } else {
    //         return "That is not a number..."
    //     }
    // }


    // if/else if/else = can continue on until all conditions have been described.

    //if i owned a cow, id get milk from it when i ran out. but since i dont, i could go to the store, but luckily, i own a goat, so i can get milk from it instead.


    // var haveCow = false;
    // var haveGoat = true;
    //
    // if (haveCow === true) { // be explicit to ensure there is no confusion
    //     console.log("milking betty");
    // } else if (haveGoat === true) { // again with explicit
    //     console.log("milking billy sue");
    // } else {
    //     console.log("going to albertson's")
    // }
    //
    // //make a fn that takes in number and will return three different strings for an arguement lesser than, greater than, or equal to 35
    //
    // function isThisThirtyFive(parameter){
    //     if (parameter > 35) {
    //         return "the number" + parameter + " is greater than 35.";
    //     } else if  (parameter < 35) {
    //         return "the number" + parameter + " is greater than 35.";
    //     } else if (parameter === 35) {
    //         return "that is 35!";
    //     } else {
    //         return "that is not a number.";
    //     }
    // }
    //
    // console.log(isThisThirtyFive(34));
    // console.log(isThisThirtyFive(35));
    // console.log(isThisThirtyFive(36));
    // console.log(isThisThirtyFive('tim'));// on returns due to specificty of ===

    // Ternary operator: value based on boolean evaluation

    //writing ternary expressions:

    // var message = (booleanValue) ? "operation was true." : "operation was false.';

    // only two options available-- keep note of that-- either true or false-- left side is true and right side is false of :

    //are we out of milk? if we are: ill head to the store, but if we do : i want to make a bowl of cereal.

    // var doWeHaveMilk = false; // can change to true to alter the outcome
    //
    // var action = (doWeHaveMilk) ? "Let's make some Honey Nut Cheerios!" : "Going to Giant Eagle.";
    //
    // console.log(action);

    // change if/else version of isItANumber function. refractor as a ternary operator.

    // function isItANumber(parameter) {
    //     if (isNaN(parameter) === false) {
    //         return "That's a number!"
    //     } else {
    //         return "That is not a number..."
    //     }
    // }

    //     return (isNaN(parameter)) ? "That's not a number..." : "that's a number!";
    // //left side is true due to not having a number be what the true side evaluates out to : right side is false due to having a number evaluation
    //
    // console.log(isItANumber(17));
    //
    // //SWITCH STATEMENTS -- statement with multiple conditions that will trigger based on value of variable; best practice to use if the variable will have many
    // // outcomes for different reasons--- can possibly alter to contains the string to output several cases.
    //
    // var color = prompt('What is your fav color?').toLowerCase();
    //
    // switch(color) {
    //     case 'green':
    //         alert('what a coincidence, that is my fav!');
    //         break;
    //     case 'orange':
    //         alert('thats my brothers fav color');
    //         break;
    //     default:
    //         alert(color + " is a weird color dude");
    //         break;
    // }


    //i dont have a cow, goat or camel.  i guess ill have to go to the store for milk
    //
    // var animal = "n/a";
    //
    // switch (animal) {
    //     case "cow":
    //         console.log("Milking Betty Lynn");
    //         break;
    //     case "goat":
    //         console.log('Milking bertha');
    //         break;
    //     case 'camel':
    //         console.log("milking ophelia");
    //         break; // if you do not place the break-- you will fall through to the next case that matches input
    //     default:
    //         console.log("go to food lion");
    //         break;
    // }
    //
    // //user to input their fav sandwich meat. like olive loaf we return alert congratulate them on their bold choice, and if they choose brisket we should return different alert: this one for congratulating them on the 'right' answer. all other responses should trigger an alert stating apathy.
    //
    // var lunchMeat = prompt("what is your fav sandwich meat?");
    //
    // switch(lunchMeat) {
    //     case "oliveloat":
    //         alert("Congrats on your bold choice!");
    //         break;
    //     case "brisket":
    //         alert("Thank you for choosing the right answer.");
    //         break;
    //     default:
    //         alert("Meh..." + lunchMeat + " aint my speed, but you do you.");
    //         break; //do not have to place default break but it is good practice
    // }





/********** NOTES FOR WALKTHROUGH OF FIRST ASSESSMENT */

//  1
//
//  function isBoolean (x) {
//     return typeof x === 'boolean';
//  }
//
//  2
//
// function isNumeric (x) {
//     if (isBoolean(x) === true || input === null) {
//         x = NaN;
//     }
//     return !isNaN(x);
// }
//
// 3
//
//     function isString(x){
//      return typeof x === 'string'
//     }
//
// 4 //recommend google search of isarray-- mdz
//
//    function isArray(x) {
//      return Array.isArray(x);
//    }
//
// 5
//
// function isNegative (x){
//      return (input < 0) === true;
// }
//
//
// 6
//
//     function isPositive (x){
//      return parseInt(x) > 0;
//     }
//
// 7
//
// function increment (x){
//      if (isNumeric(x) === false) {
//          return false
//      } else {
//          return x + 1
//      }
// }
//
// 8
//
//     function decrement (x){
//      if (isNumeric(x) === false){
//      } else {
//          return x - 1
//      }
//     }
//
// 9
//
// function square (x) {
//      if (!isNumeric(x)){
//          return false;
//      }else{
//          return x * x;// can use Math.pow(x, 2)
//      }
// }
//
// 10
//
//     function upperCase(x){
//         if (isString(x) && !isNumeric(x) || string === ""){ //or if (isString(x) && isNaN(parseInt(x)))
//             return string.toUpperCase();
//         } else {
//             return false;
//         }
//     }
//
// 11
//
// function isPalindrome (input) {
//     //return (typeof input === 'string') && (input.toLowerCase().split('').reverse().join ('') === input.toLowerCase());
//     if (typeof input === 'string'){
//         var inputNew = input.toLowerCase();
//         inputNew = inputNew.split('');
//         inputNew = inputNew.reverse();
//         inputNew = inputNew.join('');
//         return inputNew === input.toLowerCase();
//     } else {
//         return false;
//     }
// }
//
// 12
//
//     function getHighestNumber(a,b,c){
//         if (isNumeric(a) && (isNumeric(b)) && isNumeric(c)){
//             return Math.max(a,b,c);
//         }else{
//             return false;
//         }
//     }
//
// 13
//
// function containsVowel(string) {
//      if(isString(string)){
//          string = string.toLowerCase();
//          if (string.indexOf('a') > 0 || string.indexOf('e') >= 0 || string.indexOf('i') >= 0 || string.indexOf('o') >= string.indexOf('u') >= 0){
//              return true;
//          }
//          return false;
//      }
//      }
//
// 14
//
// function add (a,b){
//      if (isNumeric(a) && isNumeric(b)){
//          return parseFloat(a) + parseFloat(b);
//      }else{
//          return false;
//      }
// }
//
// 15
//
//     function multiply (a,b){
//      if (isNumeric(a) && isNumeric(b)){
//          return parseFloat(a) * parseFloat9(b);
//      }else{
//          return false;
//      }
//     }
//
// 16
//
// function sumOfSquares (a,b){
//      return add(square(a), square(b));
//     }


    /******************************* LEARNING LOOPS **********************
     *
     * WHILE LOOPS*/

    //blackjack game//
    // var keepGoing = true;
    // var ourHand = 0;
    // function hitMe(){
    //     var nextCard = Math.floor(Math.random()*11+1);
    //     ourHand += nextCard;
    // }



    // while(keepGoing) {
    //     keepGoing = confirm("Do you want another card?")
    //     if (keepGoing) {
    //         hitMe();
    //         alert('your is now ' + ourHand);
    //         if (ourHand > 21) {
    //             keepGoing = false;
    //             alert('you busted!');
    //         }
    //     }
    // }

    // // before loop
    // if (confirm("do you want another card?")
    //     hitMe();
    // alert('your hand is now ' + ourHand);
    // if (ourHand > 21)
    //     alert('you busted!');


    // if (ourHand < 21)
    //     hitMe();
    // alert('your hand is now ' + ourHand);
    //
    // if (ourHand < 21)
    //     hitMe();
    // alert('your hand is now ' + ourHand);
    //
    // if (ourHand < 21)
    //     hitMe();
    // alert('your hand is now ' + ourHand);
    //
    // if (ourHand < 21)
    //     hitMe();
    // alert('your hand is now ' + ourHand);
    //
    // if (ourHand < 21)
    //     hitMe();
    // alert('your hand is now ' + ourHand);


    // while(keepGoing) {
    //     keepGoing = confirm("Do you want another card?")
    //     if (keepGoing) {
    //         hitMe();
    //         alert('your is now ' + ourHand);
    //         if (ourHand > 21) {
    //             // keepGoing = false;
    //             alert('you busted!');
    //         }
    //     }
    // }

    // will continue to loop if no exit is present ( the false); if keepGoing (true) is removed at the beginning then the loop will continue when you cancel.

// var count = 0;
//     while (count <100){
//         console.log('count is now ' + count);
//         count++;
//     }
//////most common use of while loops ^^^

    /*****DO WHILE LOOPS ********/

    // //blackjack game//
    // var keepGoing = true;
    // var ourHand = 0;
    // function hitMe(){
    //     var nextCard = Math.floor(Math.random()*11+1);
    //     ourHand += nextCard;
    // }
    //
    // do {
    //     hitMe();
    //     alert('your is now ' + ourHand);
    //     if (ourHand > 21) {
    //         keepGoing = false;
    //         alert('you busted!');
    //     }
    //     if (keepGoing) {
    //         keepGoing = confirm("Do you want another card?")
    //     }
    //
    // } while(keepGoing);


// guess the number game... good guess go higher or lower. loop until correct number picked.

    //guessing game//
    // var pickAgain = true;

    // function pickHigher () {
    //     if (pickAgain < isItRight){
    //         alert('Please pick higher.')
    //     }
    // }



    //     var choosenNum = Math.floor(Math.random()*10);
    //
    //
    //
    //
    //
    // while(pickAgain) {
    //     pickAgain = prompt("Pick a number.");
    //     if (pickAgain) {
    //         choosenNum;
    //         if (pickAgain < choosenNum) {
    //             alert('Please pick higher.');
    //         } else if (pickAgain > choosenNum) {
    //             alert('Please pick lower.')
    //         }
    //     } else if (pickAgain === choosenNum) {
    //         alert('you win!')
    //     }
    // }



    ///walkthrough////

    // var randomNumber = Math.floor((Math.random()*20)+1);
    //
    // var keepPlaying = true;
    //
    //
    //
    //
    // do{
    //     var guess = parseInt(prompt('please guess a number between 1 and 20'));
    //
    //     if(guess === randomNumber) {
    //         alert('you guessed right!');
    //         keepPlaying = false;
    //     }
    //     else if (guess > randomNumber)
    //         alert('too high');
    //     else // guess < randomNumber
    //         alert('too low');
    //
    // } while (keepPlaying);
    //
    // console.log('random number was ' + randomNumber);
    // console.log('guess was ' + guess);



    /*******FOR LOOPS ********/

    //blackjack game//
    // var keepGoing = true;
    //
    // function hitMe(){
    //     var nextCard = Math.floor(Math.random()*11+1);
    //     ourHand += nextCard;
    // }

    // for (var ourHand = 0; ourHand <= 21;
    //      ourHand += Math.floor((Math.random()*11)+1))
    // {
    //     alert('your hand is now ' + ourHand);
    //     // keepGoing =
    //         confirm('do you want another card?');
    //
    // }

    // do {
    //     hitMe();
    //     alert('your is now ' + ourHand);
    //     if (ourHand > 21) {
    //         keepGoing = false;
    //         alert('you busted!');
    //     }
    //     if (keepGoing) {
    //         keepGoing = confirm("Do you want another card?")
    //     }
    //
    // } while(keepGoing);


/******** breaking loops and continuing loops********/

    // for (var ourHand = 0; ourHand <= 21;
    //      ourHand += Math.floor((Math.random()*11)+1))
    // {
    //     alert('your hand is now ' + ourHand);
    //     // keepGoing =
    //     if (confirm('do you want another card?'))
    //         continue;
    //     break;
    //     alert("we should never see this message");
    // }
    //
    // alert('game over');

    /********* ARRAY NOTES ************/

    //refer to notes saved from David.


    /***** MANIPULATING ARRAYS *********/

    //--you can push an extra element to the end of an array via .push()

    //-- you can add an extra element to the beginning of an array via .unshift()

    //-- both pop and shift allow you to remove methods from an array
        //-- .pop() removes the last item
        //--- .shift() removes the first item

    //-- .indexOf() identifies the location of an item in an index
        //-- .indexOf() will identify the first item
        //-- if item is repeated then .lastIndexOf() will identify the last occurrence
    //-- you can use slice similar to substring for arrays.
        //-- .slice(#,#) will show items within that range.
        //-- .slice(#) will show that item onward to the end of the array.
        //-- this will not alter the original array- just create a new array.

    //-- you can reverse everything in the array-- this method will reverse the ORIGINAL(alter) array and RETURN the reversed array.
        //-- utilize .reverse() at the end of the listed array
        //-- can include the slice method in order to make a 'copy' of the array that is being manipulated

    //-- sort method will convert items in array to their string equivalent and order them based on that value.... numbers sorted by number, strings sorted by alphabet
        //--this will alter the ORIGINAL array and return that alteration
        //--can include the slice method in order to make a 'copy' of the array that is being manipulated

    /**** CONVERTING BETWEEN STRINGS AND ARRAYS *****/

    //-- the .split() method will TURN A STRING INTO AN ARRAY.  uses a delimiter to decide where the splitting should occur. if you specify comma (,) it will split at the comma. if you specify ("") it will split out each individual character.  Whatever you split on will remove that from the string.  Ex: splitting on (D) will remove the letter (D) but return all other letters as array elements prior to and after the (D). Whether you utilize an upper or lowercase letter does alter the split.  Can utilize multiple characters for splitting. Cannot do a split on a split.

    //--joining TAKES AN ARRAY AND CONVERTS TO A STRING with delimiter of choice.  .join() can take input of anything just like split. will combine the input with whatever was designated as the parameter.

    //--concat method -- can take two arrays and make them one.

    //-- ex:
    //var alphaTeam = [ 'david, 'sophie', 'daniel']
    //var goldTeam = [ 'fer', 'justin', 'zach']
    //var staff = alphaTeam.concat(goldTeam)

//     console.log(alphaTeam);
//     console.log(goldTeam);
//     console.log(staff);
//
//     function removeAtIndex(array, index){
//         var arr1 = array.slice(0,index);
//         var arr2 = array.slice(index + 1);
//         return arr1.concat(arr2)
//     }
//
// console.log(removeAtIndex(grouped array, grouped array.indexOf('index')))


    /************* OBJECT NOTES *****************/

    // // -- CREATING AN OBJECT:
    //  var myObject = {
    //             value: true,
    //             number: 3,
    //             myString:'hello world',
    //             sayHello: function() {
    //                 console.log('hello!');
    //     }
    // };
    //
    //         myObject.sayHello();
    // console.log(myObject.myString);
    //
    // physical example:
    // var macBook = {
    //     size; 13,
    //     color 'silver',
    //     memory: 999,
    //     owner: {
    //         first_name: "first"
    //         last_name: "last"
    //
    // },
    //
    // }

    //-- can use functions inside of objects... either build one or call one from the scope of the script at that time.

    //-- join and split WILL NOT ALTER THE ORIGINAL WITHIN AN OBJECT
    //-- this keyword is in reference to the current object. Utilize by this.propertyWithinTheObject to call forth.

    //creating Arrays of Objects

    // var cups = [
    //         {
    //             type: 'cup',
    //             color: 'green',
    //             message: function (){
    //                 console.log("I'm all good");
    //             }
    //         },
    //         {
    //             type: 'cup',
    //             color:'yellow'
    //             message: function (){
    //                 console.log("I'm working");
    //             }
    //         },
    //         {
    //             type: 'cup',
    //             color: 'red',
    //             message: function (){
    //                 console.log("I need help");
    //             }
    //         }
    //
    //         ];

    //--SPONGEBOB GAME CHARACTERS

    function spongeBob(){
        return "I'm ready!";
    }

    function patrick (){
        return "No, this is Patrick";
    }

    function mrKrabs(){
        return "moneymoneymoney";
    }

    function squidward(){
        return "SQUILLIAMMMMM";
    }

    var chooseYourFighter = [
        {
            name:{
                first: "Spongebob",
                last: "Squarepants"
            },
            weapon: 'Spatula',
            greeting: spongeBob(),
            attacks: ['Bubble Buddy', "Karate", "Jellyfishing"]
        },
        {
            name:{
                first: "Patrick",
                last: "Star"
            },
            weapon: 'Mayonnaise',
            greeting: patrick(),
            attacks: ["Secret Picture", "Rock", "Imagination"]
        },
        {
            name:{
                first: "Eugene",
                last: "Krabs"
            },
            weapon: 'Secret Formula',
            greeting: mrKrabs(),
            attacks: ["Take Money", "Count Money", "Hide Money"]
        },
        {
            name:{
                first: "Squidward",
                last: "Tentacles"
            },
            weapon: 'Clarinet',
            greeting: squidward(),
            attacks: ["Yell at Spongebob", "Off Pitch", "Interperative Dance"]
        }
    ];

    // TO SHOW WHAT EACH FIGHTER CAN DO 'TABLE'

    //-- EACH 'FIGHTER' IS AN ELEMENT IN THE ARRAY - WHICH IS AN OBJECT
    //-- LOG OUT EACH FIGHTER'S FIRST NAME + MESSAGE
    //-- LOOK AT CURRENT FIGHTER'S ATTACKS (WHEN LOOPING THROUGH EACH) BY FOREACH
    //-- LOG OUT EACH ATTACK FOR EACH FIGHTER
    //-- ADDED LINE FOR SEPARATION OF CHARACTERS

    chooseYourFighter.forEach(function(fighter){
        console.log(fighter.name.first + "'s attacks are:");
        fighter.attacks.forEach(function(attack){
            console.log(attack);
        });
        console.log("-----------");
    });

    //-- CAN FIND THE CHARACTERS BY CHOOSEYOURFIGHTER[].NAME.FIRST

    //--CAN CHOOSE YOUR FIGHTER[].GREETING TO SEE WHAT THEY SAY

    //--

//    this is the end of the IFFE below
})();