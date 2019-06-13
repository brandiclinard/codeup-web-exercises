(function(){
"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

var name = prompt('What is your name?');

function sayHello(name){
    return "Hello, " + name;
    }
console.log(sayHello(name));

/*in order to utilize this function with out the variable being set, you can place
the 'codeup' into the name slot in the console.log
 */

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

var helloMessage = sayHello(name);

console.log(helloMessage);



/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

var myName = "Brandi";

sayHello(myName);

console.log(sayHello(myName));



// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

alert("Let's play a game! Click for a random number.");
alert("Your random number is " + random + ".");

var result = random != 2;

if (result != 2) {
    alert('I am sorry this was not the lucky number we are looking for today.');
} else {
    alert('You got the lucky number 2!');
}


function isTwo(random){
    var result = random === 2;
    return result
}

console.log(random);
console.log(isTwo(random));

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

var totalBill = Number(prompt('What is the total of your bill?'));

var tipPercentage = Number(prompt ('What tip percentage would you like to leave?'));

function calculateTip(a, b){
    var c = b * (a * 0.01);
    var d = c.toFixed(2);
    alert('Your calculated tip comes out to $' + d);
    return d;
}

console.log(calculateTip(tipPercentage, totalBill));


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

var originalPrice = Math.floor(Math.random() * 1000);

var discountPercentage = Math.random();

alert('Thank you for shopping with us today, please continue to see your total cost.');

alert('The total cost of all items in your shopping cart is $' + originalPrice + '. Please click to continue for discounts.');

alert('Today is your lucky day! Click okay to see what discount you recieved!');

function discountAmount(a, b){
    var c = (a * b);
    var d = c.toFixed(2);
    alert('You get an extra $' + d + ' off today!!!!! Proceed for your total.');
    return d;
    }
console.log(discountAmount(originalPrice, discountPercentage));

function applyDiscount(a, b){
    var c = (a) - (a * b);
    var d = c.toFixed(2);
    alert('Your new total after all discounts are applied is $' + d + '.');
    return d;
}
console.log(applyDiscount(originalPrice, discountPercentage));

})();