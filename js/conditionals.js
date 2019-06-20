(function(){
"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

//MY CODE

// var play = confirm("Would you like to enter a number?");
//
// if (play) {
//     var numPicked = Number(prompt('Please type a number.'));
//     if (isNaN(numPicked)){
//         alert("You did not enter a number.")
//     } else {
//         var evenOdd = (numPicked % 2 === 0) ? (numPicked + " is even.") : (numPicked + " is odd.");
//         alert(evenOdd);
//         var bigNum = numPicked + 100;
//         alert('Your number plus 100 is ' + bigNum + ".");
//         var negPos = (Math.sign(numPicked) === 1) ? (numPicked + " is positive.") : (numPicked + " is negative.");
//         alert(negPos);
//     }
// } else {
//     alert("Please let us know if you would like to play later.");
// }


// Walkthrough notes:

    // if (play === true) {
    //     var userNumber = Number(prompt("give me a number"));
    //     if (isNaN(userNumber) === false) {
    //         alert((userNumber % 2 === 0) ? "That number is even." : "That number is odd.");
    //         alert(userNumber + " plus 100 is " + (userNumber +100));
    //         if (userNumber < 0) {
    //             alert('that number is negative');
    //         }else{
    //             alert('that number is positive');
    //         }
    //     }
    // }

    // can build out functions to indicate and use within in the if/else to indicate pos/neg to call on

/** ########################################################################## **/

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// MY CODE

// function analyzeColor(a){
//     if ('red'){
//         alert('Apples are red.');
//         return 'Apples are red.';
//     } else if ('orange') {
//         alert('Obviously the fruit oranges are orange.');
//         return 'Obviously the fruit oranges are orange.';
//     } else if ('yellow') {
//         alert("Don't eat the yellow snow.");
//         return "Don't eat the yellow snow.";
//     } else if ('green') {
//         alert("The grass and trees are usually green when healthy.");
//         return "The grass and trees are usually green when healthy.";
//     } else if ('blue') {
//         alert("The ocean is blue.");
//         return "The ocean is blue.";
//     } else if ('indigo') {
//         alert("Native Americans used to make indigo paint for use on carcass canvas.");
//         return "Native Americans used to make indigo paint for use on carcass canvas.";
//     } else if ('violet') {
//         alert("Isn't violet the same color as purple?");
//         return "Isn't violet the same color as purple?";
//     } else {
//         alert("The color " + a + " is not listed on our analyzer at this time.");
//         return "The color " + a + " is not listed on our analyzer at this time.";
//     }
// }
//
// console.log(analyzeColor(a));

//***********Walkthrough notes:

    //difference: only returns instead of alert and console.log
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

// MY CODE

// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// MY CODE

function analyzeColor(a){
    switch(a) {
        case 'red':
            alert('Apples are red.');
            return 'Apples are red.';
            break;
        case 'orange':
            alert('Obviously the fruit oranges are orange.');
            return 'Obviously the fruit oranges are orange.';
            break;
        case 'yellow':
            alert("Don't eat the yellow snow.");
            return  "Don't eat the yellow snow.";
            break;
        case 'green':
            alert("The grass and trees are usually green when healthy.");
            return "The grass and trees are usually green when healthy.";
            break;
        case 'blue':
            alert("The ocean is blue.");
            return "The ocean is blue.";
            break;
        case 'indigo':
            alert("Native Americans used to make indigo paint for use on carcass canvas.");
            return "Native Americans used to make indigo paint for use on carcass canvas.";
            break;
        case 'violet':
            alert("Isn't violet the same color as purple?");
            return "Isn't violet the same color as purple?";
            break;
        default:
            alert("The color " + a + " is not listed on our analyzer at this time.");
            return "The color " + a + " is not listed on our analyzer at this time.";
            break;
    }
}

console.log(analyzeColor(randomColor));

    //********WALKTHROUGH NOTES:
    //UTILIZE THE RETURN INSTEAD OF CONSOLE.LOG and utilize return messages

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var color = prompt('Please enter a color.').toLowerCase();


/** ########################################################################## */



/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// MY CODE

// function calculateTotal(luckyNumber, totalBill){
//     if (luckyNumber === 0){
//         return (totalBill * 0);
//     } else if (luckyNumber === 1) {
//         return (totalBill - (totalBill * 0.10));
//     } else if (luckyNumber === 2) {
//         return (totalBill - (totalBill * 0.25));
//     } else if (luckyNumber === 3) {
//         return (totalBill - (totalBill * 0.35));
//     } else if (luckyNumber === 4) {
//         return (totalBill - (totalBill * 0.50));
//     } else if (luckyNumber === 5) {
//        return (totalBill - totalBill);
//     }
// }

//******* walkthrough notes: switch statement utilized due to having only one thing being manipulated.

    // function calculateTotal(luckNum, initialTotal) {
    //     switch (luckNum) {
    //         case 0:
    //             return initialTotal;
    //         case 1:
    //             return initialTotal * 0.9;
    //         case 2:
    //             return initialTotal * 0.75;
    //         case 3:
    //             return initialTotal * 0.65;
    //         case 4:
    //             return initialTOtal * 0.5;
    //         default:
    //             return 0;
    //     }
    // }

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */

// Generate a random number between 0 and 6

    //MY CODE

    // var luckyNumber = Math.floor(Math.random() * 6);
    //
    // var totalBill = Number(prompt("What was your total bill?"));
    //
    // var newBill = calculateTotal(luckyNumber, totalBill);
    //
    // console.log(calculateTotal(luckyNumber, totalBill));
    //
    // alert("Your lucky number was " + luckyNumber + "! Lets see if you get a discount. Your total bill before hand was $" + totalBill + " and now your bill is $" + newBill + "!!!");


    // ******* WALKTHROUGH NOTES:
    //UTILIZING CALCULATETOTAL(LUCKYNUMBER,TOTALBILL) INSTEAD OF JUST CALCULATETOTAL WILL INPUT THE INFORMATION GAINED IN THE FUNCTION.

}());

