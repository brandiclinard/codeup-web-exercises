(function(){
"use strict";

    /*****************Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.*
     */

    // MY CODE

    // for (var i = 1; i < 50; i +=2){
    //     var numPick = Number(prompt('Pick an odd number between 1 and 50.'));
    //     if ((isNaN(numPick)) || (numPick < 1) || (numPick > 50)) {
    //         alert('You did not pick an odd number within the stipulations. Try again.');
    //     }else if(numPick % 2 === 0) {
    //         alert('That is not odd, please try again.')
    //
    //     }else{
    //         alert('Thank you.');
    //         break;
    //     }
    // }


/************  Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
 Your output should look like this:


 Number to skip is: 27

 Here is an odd number: 1
 Here is an odd number: 3
 Here is an odd number: 5
 Here is an odd number: 7
 Here is an odd number: 9
 Here is an odd number: 11
 Here is an odd number: 13
 Here is an odd number: 15
 Here is an odd number: 17
 Here is an odd number: 19
 Here is an odd number: 21
 Here is an odd number: 23
 Here is an odd number: 25
 Yikes! Skipping number: 27
 Here is an odd number: 29
 Here is an odd number: 31
 Here is an odd number: 33
 Here is an odd number: 35
 Here is an odd number: 37
 Here is an odd number: 39
 Here is an odd number: 41
 Here is an odd number: 43
 Here is an odd number: 45
 Here is an odd number: 47
 Here is an odd number: 49
 ****/

// MY CODE

//     var numPick = Number(prompt('Pick an odd number between 1 and 50.'));
//
// while ((isNaN(numPick)) || (numPick < 1) || (numPick > 50) || (numPick % 2 === 0)) {
//     alert('You did not pick an odd number within the stipulations. Try again.');
//         if (true){
//             numPick = Number(prompt('Pick an odd number between 1 and 50.'))
//         } continue;
// }
//         for (var i = 1; i < 50; i += 2) {
//             if (i === numPick) {
//                 console.log("Skip this number: " + i);
//             } else {
//                 console.log('Here is an odd number: ' + i);
//
//             }
//         }


}());

//--- EXERCISE COMPLETE. REVIEWED WALKTHROUGH NOTES ON CODEUP BETELGEUSE... DOES NOT STATE CONTINUE IN THIS FUNCTION. SET UP THE SAME WAY.