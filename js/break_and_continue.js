(function(){
"use strict";

    /*****************Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.*
     */


// do {
//     var numPick = prompt('Pick an odd number between 1 and 50.');
//         if (numPick % 2 === 0){
//             alert('That is not odd, please try again.')
//         }else{
//             alert('Congrats!')
//             break;
//         }
//
// } while (numPick <= 50);

//need to add caps for min and max number of 1-50; add else if for stipulations and another alert. need to add stipulations for string as well.

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

var numPick = Number(prompt('Pick an odd number between 1 and 50.'));
    var n = 0;
            var oddNum;
//     do {
//
//         if ((n % 2 !== 0) && ((numPick < 50) || (numPick > 1))) {
//             n++;
//             console.log("Here is an odd number: " + n);
//             continue;
//         }else if (oddNum === numPick){
//             console.log('Skipping this number: ' + numPick);
//         }else{
//             alert('You did not enter an odd number between 1 and 50.');
//             Number(prompt('Pick an odd number between 1 and 50.'));
//         }
//
// } while (n < 50);

for (n = 0; n < 50; n++){
    if ((n % 2 !== 0)){
        console.log("Here is an odd number:" + n);
    // }else{
    //     alert('You did not enter an odd number between 1 and 50.');
    }
    for (numPick; n < 50;n++){ numPick === n;
        console.log("Skipping this number: " + numPick);
    }
}

}());