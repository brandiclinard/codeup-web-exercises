(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    console.log(planetsString);

    var planetsArray = planetsString.split('|');

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var breakPlanets = planetsArray.join('<br>');

    console.log(breakPlanets);

    //REASON THIS IS USEFUL: ON HTML PAGE IT WILL LIST THE ITEMS BUT NOT ON THE CONSOLE EVENTUALLY WHEN WE GET INTO THAT.

    //attempt at bonus

//     var i;
//
//     var listPlanets = 'Mercury,Venus,Earth,Mars,Jupiter,Saturn,Uranus,Neptune';
//
//     var lplen = listPlanets.length;
//
//     var text = '<ul>';
//
//     for (i=0; i<lplen; i++){
//         text =+ '<li>' + listPlanets[i] + '</li>';
//     }
//
//     text += '</ul>';
//
// console.log(listPlanets);

    //--UNABLE TO ANSWER BONUS QUESTION


    //-- WALKTHROUGH OF BONUS:

    // var planetsUL = "<ul><li>" + planetsArray.join('</li><li>') + '</li></ul>';

    //-- BEING ABLE TO DO THIS WILL ALLOW YOU TO ALTER THE HTML OF YOUR WEBPAGE.
})();


//--- EXERCISE COMPLETE-- NOTES FOR BONUS ADDED FROM WALKTHROUGH