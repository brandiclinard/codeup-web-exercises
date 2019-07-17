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
const usersTotalYearsOfExperience = users.reduce(function(sum, current){
    return sum + current.yearsOfExperience
    },0);
console.log(usersTotalYearsOfExperience);


const usersAvgYearsOfExperience = function(){
   return usersTotalYearsOfExperience / users.length;
};
console.log(usersAvgYearsOfExperience());
console.log(users.length);

/**Use .reduce to get the longest email from the list of users.**/
const userLongestEmail = users.reduce(function(previous, current){
    currentEmail = current.email;
    if(currentEmail.length > previous.length){
        return currentEmail
    }else{
        return previous
    }
},'');
console.log(userLongestEmail);

    /**Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.**/
    const usersSingleString

    /**BONUS: Use .reduce to get the unique list of languages from the list of users.**/