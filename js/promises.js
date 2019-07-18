'use strict';

//Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

// const wait = (num) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(`This promise resolved after ${num} second(s)!`)
//         }, (num * 1000));
//     });
// };
//
// wait(1);
// wait(3);
// wait(5);
// wait(7);
// wait(9);


//Create a function that accepts a GitHub username, and returns a promise that resolves with the date of the last commit that user made. Reference the github api documentation to achieve this.

// const lastCommit ='https://api.github.com/repos/:owner/:repo/git/refs/heads/:branch';

function lastCommit (userName) {
    fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': 'token ' + githubUserEmailToken}})
        .then(response => response.json())
        .then(dataArray => {
            for (let user of dataArray){
                if (data[i].type === 'PushEvent') {
                    console.log(this.created_at)
                }
            }
        });
}

lastCommit('brandiclinard');

    // .then(usersArray => {// HAVE TO USE SECOND .THEN IN ORDER TO ACCOMPLISH AFTER THE RESPONSE WITH JSON HAS RETURNED
    //     for(let user of usersArray){
    //         console.log(user.login, user.html_url)
    //     }

    // console.log(data)


