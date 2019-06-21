(function() {
     "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    // var person = {
    //     firstName: "Brandi",
    //     lastName: "Clinard"
    // };
    //
    // console.log(person.firstName);
    // console.log(person.lastName);
    //

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */


    //
    // var person = {
    //         firstName: "Brandi",
    //         lastName: "Clinard",
    //         sayHello: function() {
    //         console.log("Hello from " + person.firstName + " " + person.lastName + "!");
    //     },
    // };
    //
    // person.sayHello();

    // WALK THROUGH NOTES

    // person.sayHello = function (){
    //     return "Hello from " + this.firstName + " " + this.lastName + "!";
    // };
    //
    // console.log(person.sayHello());


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */


    //
    // function discount(amount) {
    //     var discountAmount;
    //     if (amount > 200) {
    //         discountAmount = (amount * 0.12);
    //         return discountAmount;
    //     }else if (amount < 200){
    //         discountAmount = 0;
    //         return discountAmount;
    //     }
    // }
    //
    //
    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];
    //
    //
    // shoppers.forEach(function (shopper) {
    //     console.log("This shopper's name is " + shopper.name + ".");
    //     console.log("They owe $" + shopper.amount + ".");
    //     console.log("Their discount total is $" + discount(shopper.amount).toFixed(2) + ".");
    //     console.log("After discount, (if they qualified, they owe $" + (shopper.amount- discount(shopper.amount)).toFixed(2));
    // });


    // // WALK THROUGH NOTES
    // //-- CREATE A FN TO CALCULATE DISCOUNT
    //
    // function calculateDiscount(total){
    //     var output = 0;
    //     if (total > 200){
    //         output = total * .12;
    //     }
    //     return output;
    // }
    //
    // //-- CREATE A FN TO CONVERT NUM TO CURRENCY
    //
    // function convertToCurrency(num){
    //     return "$" + num.toFixed(2);
    // }
    //
    // //-- DISPLAY INDIVIDUAL INFO FOR EACH SHOPPER
    //
    // function displayShopperInfo(shopper){
    //     //default empty string
    //     var output = "";
    //     //var stores total amount
    //     var amount = convertToCurrency(shopper.amount);
    //     //var stores discount to be applied
    //     var discount = webkitConvertPointFromNodeToPage((calculateDiscount(shopper.amount)));
    //     //var stores final totoal
    //     var finalAmount = convertToCurrency(shopper.amount - calculateDiscount(shopper.amount);
    //     //concatenate onto empty string
    //     output += shopper.name + ' spent' + amount;
    //     output += ' and received a discount of ' + discount;
    //     output += " and paid " + finalAmount;
    //     //return final string
    //     return output;
    // }
    //
    // //-- DISPLAY INFO FOR ALL SHOPPERS
    // function displayShoppersInfo(shoppers){
    //     shoppers.forEach(function(shopper){
    //         console.log(displayShopperInfo(shopper));
    //
    //     });
    // }
    //
    // displayShoppersInfo(shoppers);

//being able to have a returned output will ALWAYS be usable on different browsers.  console.log AFTER.

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

var books = [
        {
            title:"The Very Hungry Caterpillar",
            author:{
                firstName:"Eric",
                lastName:"Carle"
    }
        },

        {
            title:"Goodnight Moon",
            author:{
                firstName:"Margaret",
                lastName:"Brown"
            }
        },

        {
            title:"Where the Wild Things Are",
            author:{
                firstName:"Maurice",
                lastName:"Sendak"
            }
        },

        {
            title:"Alice's Adventures in Wonderland",
            author:{
                firstName:"Lewis",
                lastName:"Carroll"
            }
        },

        {
            title:"Peter and Wendy",
            author:{
                firstName:"J.M.",
                lastName:"Barrie"
            }
        }
];

// console.log(books);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    //
    // books.forEach(function(book){
    //     console.log("Book #" + ((Number(books.indexOf(book))) + 1));
    //     console.log(book.title);
    //     console.log(book.author.firstName + book.author.lastName);
    //     console.log("-----------");
    // });


    //--WALK THROUGH NOTES

    // books.forEach(function(book, i){
    //     var output = "";
    //     output += "Book # " + (i + 1) + "\n";
    //     output += "Title: " + book.title + "\n";
    //     output += "Author: " + book.author.firstName + " " + book.author.lastName + "\n";
    //     output += "---" + "\n";
    //     console.log(output);
    // });

    // \n creates a line break in the console

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
//
//     var title = "";
//     var author = "";
//     var bookNum = 0;
//
//     do{
//     function createBooks (parameters){
//         var title = parameters.title;
//         var author = parameters.author;
//         console.log ("Book #:" + (bookNum + 1) + " Title: " + title + " Author: " + author);
//         }
//
//     }while (bookNum < (books.length + 2));
//
//
// createBooks(books);

// UNABLE TO COMPLETE BONUS-- ERROR MESSAGE FROM INTELLIJ THAT FUNCTION STATEMENT IS NOT AT TOP LEVEL OF A PROGRAM OR FUNCTION IS PROHIBITED--- GIVE ON THE CREATEBOOKS.

    //-- WALK THROUGH NOTES OF BONUS

    function createBook(title, firstName, lastName){
        var book = {};
        book.title = title;
        book.author = {};
        book.author.firstName = firstName;
        book.author.lastName = lastName;
        return book;
    }

    books.push(createBook("How to Draw Manga", "Katy", "Coope"));
    console.log(books);

    function showBookInfo(book, i){
        var output = "";
            output += "Book # " + (i + 1) + "\n";
            output += "Title: " + book.title + "\n";
            output += "Author: " + book.author.firstName + " " + book.author.lastName + "\n";
            output += "---" + "\n";
            console.log(output);
    }

    showBookInfo(books);


})();

//-- UPDATED WITH WALK THROUGH NOTES