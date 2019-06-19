(function(){
"use strict";

/******Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

 For example, showMultiplicationTable(7) should output


 7 x 1 = 7
 7 x 2 = 14
 7 x 3 = 21
 7 x 4 = 28
 7 x 5 = 35
 7 x 6 = 42
 7 x 7 = 49
 7 x 8 = 56
 7 x 9 = 63
 7 x 10 = 70
 ******/

//console.log('hello');


// function showMultiplicationTable(x){
//     for (var n = 1; n <= 10; n++){
//        var y = x * n;
//         console.log( x + ' x ' + n + ' = ' + y);
//     }
// }
//
// console.log(showMultiplicationTable(7));


/******************Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:


 123 is odd
 80 is even
 24 is even
 199 is odd
 ...
 *************/


// var min = 20;
// var max = 200;
//
// function isOddEven (){
//     for(var i = 1; i <= 10; i++ ){
//         var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
//         console.log(randomNumber);
//         if (randomNumber % 2 === 0){
//             console.log(randomNumber + ' is even');
//         } else {
//             console.log(randomNumber + " is odd");
//         }
//     }
// }
// isOddEven();

/*******
 Create a for loop that uses console.log to create the output shown below.


 1
 22
 333
 4444
 55555
 666666
 7777777
 88888888
 999999999
 *****************/

// var num = '';
// var x;
// var y;
// for(x = 1; x < 10; x++) {
//     for (y = 0; y < x; y++) num += x;
//     console.log(num);
//     num = ''
// }

/************ Create a for loop that uses console.log to create the output shown below.


 100
 95
 90
 85
 80
 75
 70
 65
 60
 55
 50
 45
 40
 35
 30
 25
 20
 15
 10
 5
 ****************/

// for(var i = 1; i < 101; i++){
//     if (i % 5 === 0){
//         console.log(i)
//     }
// }





})();