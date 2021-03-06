const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

    /**Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.**/
    const atLeastThreeLanguages = users.filter(user => user.languages.length > 2);
console.log(atLeastThreeLanguages);

    /**Use .map to create an array of strings where each element is a user's email address**/
const usersEmailAddress = users.map(user => user.email);
console.log(usersEmailAddress);

    /**Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.**/
const usersTotalYearsOfExperience = users.reduce((sum, current) => sum + current.yearsOfExperience,0);
console.log(usersTotalYearsOfExperience);


const usersAvgYearsOfExperience = function(){
   return usersTotalYearsOfExperience / users.length;
};
console.log(usersAvgYearsOfExperience());

/**Use .reduce to get the longest email from the list of users.**/
const userLongestEmail = users.reduce(function(previous, current){
    const currentEmail = current.email;
    if(currentEmail.length > previous.length){
        return currentEmail
    }else{
        return previous
    }
},'');
console.log(userLongestEmail);

    /**Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.**/
//     const usersSingleString = users.map(function(user){
//         return user.name;
//     });
//     console.log(usersSingleString);
//
// const reduceValue = usersSingleString.reduce(function(previous, current, index, array){
//     const last = function(){
//         const l = indexOf(array.length - 1);
//         return l`.`
//     };
//     return previous + current + ', ';
// },`Your instructors are: `);
// console.log(reduceValue);

const yourInstructors = users.reduce(function(sentence, instructor, index, array){
    if(index === (array.length - 1)){
        return `${sentence}${instructor.name}. `;
    }else {
        return `${sentence}${instructor.name}, `;
    }
},'Your instructors are: ');

console.log(yourInstructors);
/**BONUS: Use .reduce to get the unique list of languages from the list of users.**/
// const usersListOfLanguages = users.reduce(function(previous, current){
//     const list = [];
//     const language = current.languages;
//     if(language !== previous){
//          return list.push(previous);
//     }
// },'');
//
// console.log(usersListOfLanguages);

const uniqueLanguages = users.reduce(function(prev, current){
    const langs = current.languages;
    for(const lang of langs){
        prev.add(lang)
    }
    return prev;
},new Set);
console.log(uniqueLanguages);