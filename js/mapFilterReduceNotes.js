"use strict";



/**
 * .map()-- same length of collection just with transformation in place to each item.*/

const myNumbers = [4,5,6,7,8,9,10];
const myNewNumbers= myNumbers.map(x => x ** 2);
console.log(myNewNumbers);// returns 16, 25, 36,49, 64

/**
 * .filter()-- will give back altered new array*/
const greaterThanSix = myNumbers.filter(x => x > 6);
console.log(greaterThanSix);

/**.reduce()-- takes all of collection and manipulates down to one item--takes in two parameters and initial value at the very end*/
const sumNumbers = myNumbers.reduce(function(currentSum, currentElement){
    return currentSum + currentElement;
},0);
console.log(sumNumbers);

const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genres: ["southern","gothic","coming of age"],
        yearsInPublication: 59
    },
    {
        title: "No Longer Human",
        author: "Osamu Dazai",
        genres: ["autobiography","short novel"],
        yearsInPublication: 71
    },
    {
        title: "1984",
        author: "George Orwell",
        genres: ["dystopian","sci-fi","political fiction"],
        yearsInPublication: 70
    },
    {
        title: "Noruwei no Mori",
        author: "Haruki Murakami",
        genres: ["coming of age", "novel"],
        yearsInPublication: 32
    }
];

/**
 * Return book titles*/

const bookTitles = books.map(book => {
    return book.title;
});
console.log(bookTitles);
// if you set the book.title to harry potter you will alter the array because you are not changing the array length but the object property within the array


/**
    MAP
    using .map, create an array that returns all author names.
 */
const bookAuthors = books.map(book => book.author);
console.log(bookAuthors);

/**
 * Return books with coming of age genres*/
const comingOfAge = books.filter(book => book.genres.indexOf('coming of age') >= 0).map(book => book.title);
console.log(comingOfAge);

/**
    FILTER
    using .filter, create an array that returns all books with at least 3 genres
 */
const threeGenreBooks = books.filter(book => book.genres.length > 2).map(book => book.title);
console.log(threeGenreBooks);

/**Refer to the example in the curriculum for reduce... rewrite with your own sentence*/

/**Return the longest author name*/
const longestName = books.reduce(function(previous, current){
    const currentName = current.author;
    if(currentName.length > previous.length){
        return currentName;
    }else {
        return previous;
    }
},"");
console.log(longestName);

/**
    REDUCE
    using .reduce, return the total years between all books.
 */
const totalYears = books.reduce(function(sumOfYears, current){
    return sumOfYears + current.yearsInPublication;
},0);

console.log(totalYears);