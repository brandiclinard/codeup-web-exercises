(function(){
"use strict";

/****Create a while loop that uses console.log() to create the output shown below.


 2
 4
 8
 16
 32
 64
 128
 256
 512
 1024
 2048
 4096
 8192
 16384
 32768
 65536                *******/

// THIS CODE WORKS

// var num = 2;
// var maxValue = 65536;
//
// while(num <= maxValue) {
//     console.log(num);
//     num += num;
// }


/***********
 An ice cream seller can't go home until she sells all of her cones. Write a JS program that generates a random number between 50 and 100 representing the amount of cones to sell. Your code should generate numbers between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is how you get the random numbers.


 // This is how you get a random number between 50 and 100
 var allCones = Math.floor(Math.random() * 50) + 50;
 // This expression will generate a random number between 1 and 5
 Math.floor(Math.random() * 5) + 1;
 The output should be similar to the following:

 5 cones sold...  // if there are enough cones
 Cannot sell you 6 cones I only have 3...  // If there are not enough cones
 Yay! I sold them all! // If there are no more cones
 *************/


var sellMin = 50;
var sellMax = 100;
var conesToSell = Math.floor(Math.random() * (sellMax - sellMin + 1) + sellMin);



//console.log amount of cones sold
do{
    var buyMin = 1;
    var buyMax = 5;
    var conesBought = Math.floor(Math.random()* (buyMax - buyMin + 1) + buyMin);
    console.log(conesToSell);
    if(conesBought <= conesToSell){
        conesToSell -= conesBought;
        console.log(conesBought + " sold.");

    }else{
        console.log('You cannot buy ' + conesBought + ". I only have " + conesToSell + ".");
    }

}while(conesToSell>0);

console.log("All sold!");




// var i = 0;
//
//     while (i < 10) {
//         console.log('while loop iteration #' + i);
//         i++;
//     }
//
//     var i = 10;
//
//     do {
//         console.log('while loop iteration #' + i);
//         i++;
//     } while (i < 10);


})();

//--- EXERCISE COMPLETE