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

    var breakPlanets = 'Mercury<br>Venus<br>Earth<br>Mars<br>Jupiter<br>Saturn<br>Uranus<br>Neptune';

    console.log(breakPlanets);

    //it would not let me split the list at the <br>

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

})();


