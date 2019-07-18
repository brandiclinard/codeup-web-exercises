// //THIS EXAMPLE HAS A 50% CHANCE OF FAILING OR WORKING.
// const itWorked= () => console.log('It worked!');
// const itFailed= () => console.error('It failed!');
// // CANNOT USE THESE VARIABLES INSIDE OF THE MYPROMISE SCOPE(BLOCK SCOPE)....SO BELOW IS THE FIX.
//
// const myPromise = new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//         resolve();
//     } else {
//         reject();
//     }
// });
// myPromise.then(itWorked);
// myPromise.catch(itFailed);
// // THE ABOVE IS THE SOLUTION TO THE SCOPE ISSUE.-- CAN REMOVE SEMICOLON AT THE END OF THE FUNCTION AND JUST INPUT .THEN AND .CATCH;-- CHAINING WILL ONLY HAVE THE LOG WE PROGRAMMED DUE TO THE BROWSER RECOGNIZING THAT WE HAVE SOMETHING SET IN PLACE FOR FAILURE.

// //THINGS THAT MAY CAUSE LAGGING ARE SUCH AS APIs AND TIME INTERVALS (BELOW):
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (Math.random() > 0.5) {
//             resolve('HOORAY');
//         } else {
//             reject('BOO');
//         }
//     }, 1500);
// });
//
// console.log(myPromise); // a pending promise
//
// myPromise.then((data) => console.log(`resolved: ${data}`));
// myPromise.catch((data) => console.log(`rejected: ${data}`));
//
// console.log(('hello betelgeuse'));
// //THE ABOVE WORKS 50% OF THE TIME AND ALSO HAS A PENDING STATE THAT YOU CAN VIEW VIA THE CONSOLE.-- IF YOU CLICK ON THE PENDING ITEM IN THE CONSOLE BEFORE THE INTERVAL HAS STATED RESOLVED OR FAILED IT WILL STAY IN A PENDING LISTED STATUS.

// //TO SHOW BELOW THAT MULTIPLE FUNCTIONS RACE AND WILL POPULATE AT DIFFERENT TIMES AND MAY PASS OR FAIL:
// const myPromise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (Math.random() > 0.5) {
//             resolve('HOORAY1');
//         } else {
//             reject('BOO1');
//         }
//     }, 1500);
// });
//
// console.log(myPromise1); // a pending promise
//
// myPromise1.then((data) => console.log(`resolved: ${data}`));
// myPromise1.catch((data) => console.log(`rejected: ${data}`));
// const myPromise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (Math.random() > 0.5) {
//             resolve('HOORAY2');
//         } else {
//             reject('BOO2');
//         }
//     }, 1500);
// });
//
// console.log(myPromise2); // a pending promise
//
// myPromise2.then((data) => console.log(`resolved: ${data}`));
// myPromise2.catch((data) => console.log(`rejected: ${data}`));
// const myPromise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (Math.random() > 0.5) {
//             resolve('HOORAY3');
//         } else {
//             reject('BOO3');
//         }
//     }, 1500);
// });
//
// console.log(myPromise3); // a pending promise
//
// myPromise3.then((data) => console.log(`resolved: ${data}`));
// myPromise3.catch((data) => console.log(`rejected: ${data}`));

// //CHAINING MORE ONTO THE EVENT HANDLERS:--undefined
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (Math.random() > 0.5) {
//             resolve('HOORAY');
//         } else {
//             reject('BOO');
//         }
//     }, 1500);
// })
//
// // console.log(myPromise); // a pending promise
//
// .then(data => console.log(`resolved: ${data}`))
// .then(()=> console.log('this is a chained handler data: ' + data))// data returns undefined here due to the data returned being undefined in this function and continuing to be passed.
// .catch(data => console.log(`rejected: ${data}`));

// //CHAINING ONTO EVENT HANDLERS: -- DEFINED
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (Math.random() > 0.5) {
//             resolve('HOORAY');
//         } else {
//             reject('BOO');
//         }
//     }, 1500);
// })
//
// // console.log(myPromise); // a pending promise
//
//     .then(data => (`resolved: ${data}`))
//     .then((data)=> console.log('this is a chained handler data: ' + data))// data returns defined here due to being defined in the function because the previous function is not logged it can then directly give the data to the second .then
//     .catch(data => console.log(`rejected: ${data}`));
//     .catch(() => 'yeah something just blew up!');


// //HOW TO RUN ALL TOGETHER AND SEE WHO COMES BACK FIRST
// const myPromise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (Math.random() > 0.5) {
//             resolve('HOORAY1');
//         } else {
//             reject('BOO1');
//         }
//     }, 1500);
// })
//
// // console.log(myPromise1); // a pending promise
//
// .then((data) => console.log(`resolved: ${data}`))
// .catch((data) => console.log(`rejected: ${data}`));
//
// const myPromise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (Math.random() > 0.5) {
//             resolve('HOORAY2');
//         } else {
//             reject('BOO2');
//         }
//     }, 1500);
// })
//
// // console.log(myPromise2); // a pending promise
//
// .then((data) => console.log(`resolved: ${data}`))
// .catch((data) => console.log(`rejected: ${data}`));
//
// const myPromise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (Math.random() > 0.5) {
//             resolve('HOORAY3');
//         } else {
//             reject('BOO3');
//         }
//     }, 1500);
// })
//
// // console.log(myPromise3); // a pending promise
//
// .then((data) => console.log(`resolved: ${data}`))
// .catch((data) => console.log(`rejected: ${data}`));
//
// Promise.all([myPromise1,myPromise2,myPromise3])
// .then(()=> console.log('they all finish!'));// shows all of the after they run and makes them run together (or so appear on the log as such)
//
// Promise.race([myPromise1,myPromise2,myPromise3])
// .then((data)=>{
//     console.log('the above finished');//indicates which one finished first... logs right after the first one to finish
//     console.log(data);
// });

// //JQUERY GET REQUEST
// $.get("https://api.chucknorris.io/jokes/random")
// .done(function(data) {console.log(data.value)})
// .fail(function(data) {console.log('error')})

// //HOW TO UNPACK THE JQUERY RESULT AND WRAP IT INTO A PROMISE AND USE THE PROMISE HANDLERS TO DEAL WITH THE DATA THAT IS PASSED ALONG
// $.get("https://api.chucknorris.io/jokes/random")
//     .done(data => {resolve(data)})
//     .fail(error => {reject(error)})
//     .then(data => console.log(data.value))
//     .catch(data => (console.error('there was an error: ' + error)));
//
// $.ajax('https://icanhazdadjoke.com/', {headers:{Accept:'application/JSON'}}
// .done(data => console.log(data.joke))
// })

// //FETCH-- REJECT/RESOLVE BUILT INTO IT
// let apiResponse = fetch("https://api.chucknorris.io/jokes/random")
// .then(response => response.json())
// .then(data => console.log(data.value));
//
// //FIZZ BUZZ WARM UP IN ES6:
//
// const fizzbuzz = input => {
//     for (let i = 1; i <= input; i++) {
//         if ((i % 3 === 0) && (i % 5 === 0))
//             console.log('fizzbuzz')
//         else if (i % 3 === 0)
//             console.log('fizz')
//         else if (i % 5 === 0)
//             console.log('buzz')
//         else
//             console.log(i)
//     }
// }
// fizzbuzz(100);

//HOW TO GATHER DATA
fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(usersArray => {// HAVE TO USE SECOND .THEN IN ORDER TO ACCOMPLISH AFTER THE RESPONSE WITH JSON HAS RETURNED
        for(let user of usersArray){
            console.log(user.login, user.html_url)
        }
    });


