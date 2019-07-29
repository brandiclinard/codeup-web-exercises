'use strict';

//Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

const wait = (num) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`This promise resolved after ${num} second(s)!`)
        }, (num * 1000));
    });
};

// const wait = (num) => {
//     return new Promise((resolve) =>{
//         setTimeout(resolve, ms);
//     })
// }

wait(1);
wait(3);
wait(5);
wait(7);
wait(9);


//Create a function that accepts a GitHub username, and returns a promise that resolves with the date of the last commit that user made. Reference the github api documentation to achieve this.


// function lastCommit (userName) {
//     fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': 'token ' + githubToken}})
//         .then(response => response.json())
//         .then(data => { console.log(data[0].created_at)// attempt at looping through returned information
//             // for(const[index, datum]of data.entries()){
//             //     if(data[i].type === 'PushEvent'){
//             //         console.log(this.created_at)
//             //     }
//             // }
//         })
// }
//
// lastCommit('brandiclinard');

//WALK THROUGH NOTES:
const getLastPush = function (username) {
    const url = `https://api.github.com/users/${username}/events`;
    return fetch(url, {
        headers: {
            "Authorization": 'token ' + githubToken
        }
    })
        .then(response => response.json())
        .then(events => {
            for(let event of events){
                if (event.type == 'PushEvent'){
                    return event.created_at
                }
            }
        });
}

console.log(getLastPush('brandiclinard'));

let username = prompt("what user do you want to check up on?");
console.log(getLastPush(username));


