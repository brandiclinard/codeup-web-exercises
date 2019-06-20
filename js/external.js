"use strict";

//MY CODE

console.log('"Hello from external JavaScript"');

alert('Welcome to my Website!');

var userInput = prompt('What is your favorite color?');
alert('Great, '+ userInput + ' is my favorite color too!');



/*Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.

When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
Use an alert to show the results of each problem.*/

/*You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days,
they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a
movie per day is $3, how much will you have to pay?*/

//MY CODE

var LittleMermaid = Number(prompt('How many days would you like to rent The Little Mermaid?'));

var BrotherBear = Number(prompt('How many days would you like to rent Brother Bear?'));

var Hercules = Number(prompt('How many days would you like to rent Hercules?'));

var MoviePayment = (LittleMermaid + BrotherBear + Hercules) * 3;

// FIRST ROUND OF CODE

// var disneyConfirmed = confirm('Would you like to rent some Disney movies? We have a special.');

// console.log(disneyConfirmed);

// if(disneyConfirmed) {
//     alert('You owe: $' + MoviePayment);
// } else {
//     alert('Maybe next time.');
// }

alert('You owe Blockbuster: $' + MoviePayment);

/*Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
 they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook
 $350. How much will you receive in payment for this week? You worked 10 hours for
 Facebook, 6 hours for Google and 4 hours for Amazon.*/


// MY CODE

var Google = 400;

var Amazon = 380;

var Facebook = 350;


var ContractorConfirmed = confirm('Would you like your contractor payment for your work with Google, Amazon and Facebook this week?');

console.log(ContractorConfirmed);

if(ContractorConfirmed) {
    var GoogleHours = Number(prompt('How many hours did you work for Google this week?'));
    var AmazonHours = Number(prompt('How many hours did you work for Amazon this week?'));
    var FacebookHours = Number(prompt('How many hours did you work for Facebook this week?'));
    var ContractorPayment = (Google * GoogleHours) + (Amazon * AmazonHours) + (Facebook * FacebookHours);
    alert('We owe you $' + ContractorPayment);

    //FIRST ROUND OF CODE

    // var hourConfirm = confirm('Did you work 10 hours for Facebook, 6 hours for Google, and 4 hours for Amazon?');
        // if(hourConfirm) {
            // alert('Awesome! We owe you $' + ContractorPayment);
        // }   else {
        //     alert('Please review your hours with these companies to ensure our books are correct.')
} else {
    alert('When you are ready to receive your payment, please let us know.');
}

/*A student can be enrolled in a class only if the class is not full and the class
schedule does not conflict with her current schedule.*/

alert("Let's get you signed up for class. For the following questions: 'Okay' is equivalent to 'Yes' and 'Cancel' is equivalent to 'No'.");

//MY CODE

var FullClass = 24;

var ClassTime = '12:00';

// var StudentSchedule = '12:00';

var ScheduleTime = prompt('What time would you like to take your class?');

if (ScheduleTime === ClassTime) {
    var StuSchConf = confirm('Does this class occur at the same time as any other courses you are taking currently?');
        if (StuSchConf) {
            alert('I am sorry, this conflicts with your schedule and you can not be enrolled at this time.');
        } else {
            var ClassSizeConf = confirm('Let\'s see if this class is full.')
                if (ClassSizeConf){
                    var classSize = Math.floor(Math.random() * 50);
                        if (classSize >= FullClass) {
                            alert('This class is full at this time.  We will place you on the wait-list and update you if there is any availability.');
                        } else {
                            alert('Great! We have you signed up for class.  You will be receiving an email with all of the details.');
                        }
                } else {
                    alert('Please let us know when you would like to sign up for a class in the future.')
                }
        }
} else {
    alert("I'm sorry, this is a last minute sign up for class and this is the only slot we have available.");
}

// ClassTime != StudentSchedule && ClassSize <= FullClass;

//WALKTHROUGH CODE

// var classTime = prompt('What time is the class?');
// var noScheduleConflict = !confirm('Does the student have a class at ' + classTime);
//
// var maxClassSize = prompt("What's the maximum class size?");
// var studentsEnrolled = prompt("How many students are currently enrolled?");
//
// alert("Student can enroll in class: " + (noScheduleConflict && (studentsEnrolled < maxClassSize)));




/*A product offer can be applied only if a person buys more than 2 items,
and the offer has not expired. Premium members do not need to buy a specific
amount of products.*/

//MY IDEA

// (PremiumMember || (numberItemsBought >2)) && currentDate <= couponExpDate;

//WALKTHROUGH CODE

var isPremiumMember = confirm('Is the customer a Premium Member?');
var numberItemsBought = Number(prompt("How many items did the customer buy?"));
var isOfferValid = confirm('Is this coupon still good?');

alert("Customer coupon valid: " + (isOfferValid && (isPremiumMember || numberItemsBought > 2)));