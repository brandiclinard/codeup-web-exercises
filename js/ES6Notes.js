"use strict";

/*
    EXPONENTIATION
    We know that the old JS syntax uses this:
    >> Math.pow(a,b)
    Using the ES6 exponentiation Operator, refactor the following:
 */

let x = Math.pow(4,5);
console.log(x);

let y = 4 ** 5;
console.log(y);


var random = Math.floor(Math.random() * Math.pow(2,3));
console.log(random);

let random2 = Math.floor(Math.random() * (2 ** 3));
console.log(random2);

/*
    LET & CONST
    Refactor the above to use es6 variable types.
    What happens when you change the 'random' variable to a const?

    Why does this happen?
    How do we fix this behavior?
 */

//leaking variable example
for(var i= 10; i>=0; i--){// change var to let and then you get an error on console due to let being restricted to the function ONLY. With let it is undefined outside of the scope.  Const cannot be reassigned so you get a type error
    console.log(i);
}
console.log(i);



random2 = Math.floor(Math.random() * x);
console.log(random);

/*
    STRING INTERPOLATION
    we can use template strings in the new es6 syntax to avoid concatenating
     multiples strings together.

     Uncomment the two constants, put in the appropriate strings.
     Refactor the code down below to use template strings.
 */

const name = 'Brandi';
const cohort = "Betelgeuse";
const greeting = `Hello ${name}! You are in the ${cohort} cohort.`;
console.log(greeting);

/*
    FOR...OF
    lets us iterate over Arrays, NodeLists, and even Strings

    rewrite the following as a for...of loop
 */

const instructors = [
    'Daniel',
    'Vivian',
    'Sophie',
    'David',
    'Justin',
    'Fer',
    'Terrell'
];

for(const instructor of instructors){
    console.log(instructor);
}

//how to only iterate through parts of the given array
//for each loop
// instructors.forEach(function(instructor, index){
//     if(index < 3){
//         console.log(instructor);
//     }
// });

// for loop
// for(let i = 0; i < 3; i ++){
//     console.log(instructors[i]);
// }

// for... of loop
// for(const [index,instructor] of instructors.entries()){
//     if(index < 3){
//         console.log(instructor);
//     }
// }

const myString = 'Betelegeuse';

for(let chr of myString){
    console.log(chr);
    console.log(chr.toUpperCase());
}


/*
    ARROW FUNCTIONS
    Shorter, cleaner and allows the 'this' keyword to be bound lexically.
    Pretty neat.// this means

    How can you use fat arrow syntax to refactor the code below?
    Make it as concise as possible.
 */

const z = 2;
const a = 3;
function add(z, a){
    return z + a;
}
console.log(add(z, a));

const add2 = (z, a) => {return z + a};
console.log(add2(z, a));

function square(z){
    return z * z;
}
console.log(square(z));

const square2 = (z) => {return z * z};
console.log(square2(z));
//can remove () to make it shorter


/*
    DEFAULT FUNCTION PARAMETER VALUES
    refactor the following so that variable 'greeting' has a value of 'Good
     Morning' and 'name' has the value of 'Betelgeuse.

     Check your work.
 */

const myGreeting = (greeting,name) => {
    return greeting + name;
};

console.log(myGreeting());
console.log(myGreeting("Hello", "Sophie"));

//new way
const myGreeting2 = (name ="Brandi") => `Good Morning, ${name}`;
console.log(myGreeting2());
console.log(myGreeting2('Betelgeuse'));

/*
    OBJECT PROPERTY VARIABLE ASSIGNMENT
    Refactor the Object below to use shorthand property assignment
 */

const dog = "Spike";
const cat = "Tom";
const mouse = "Jerry";

const pals = {
    dog: dog,
    cat: cat,
    mouse: mouse
};
console.log(pals);

//new way
const pals2 = {
    dog,
    cat,
    mouse
};
console.log(pals2);


/*
    OBJECT DESTRUCTURING
    1. Use Object Destructuring to refactor
 */

const make = 'nissan';
const model= 'rogue';
const color = 'white';

const myCar = {
    make,
    model,
    color
};

const carInfo = (car) => {
    var make = myCar.make;
    var model = myCar.model;
    console.log(make);
    console.log(model);
};

carInfo(myCar);


//new way
const myCar2 = {make, model};

function carInfo2 (make, model){
    console.log(make);
    console.log(model);
}

carInfo2(myCar2);

/*
    OBJECT DESTRUCTURING
    2. Remember the 'instructors' array that we created at the top of this
     file? Use Array Destructuring to return the first 3 instructors. Use
      the curriculum example as a reference.
 */
const [c,d,e] = instructors;
console.log(c, d, e);




//rewrite this as an arrow function
//give greeting a default value of "Good Morning"
//give cohort a default value of "Betelgeuse"
//rewrite the return to use template strings instead of concatenation

function goodMorning(greeting,cohort){
    return greeting + " " + cohort + "!";
}

console.log(goodMorning());
console.log(goodMorning(greeting, "Ceres"));

const goodMorning2 = (word1 = 'Good Morning', word2 = "Betelgeuse") => {return `${word1} ${word2}!`};

console.log(goodMorning2());
console.log(goodMorning2(undefined, "Ceres"));
// you have to redefine inside of the function if you are using the same variable outside of the function.  It will not 'leak' into the function.  undefined is used outside of the function because the defined variable does not 'leak' into the called function that is coming since we do not want to alter the first parameter but only the second. by calling undefined we can skip over that one and alter the second.