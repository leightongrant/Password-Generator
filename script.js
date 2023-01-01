import { specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters } from "./modules/chars.js";

// Hard coded options for testing
let passwordLength = 16;
let options = [[upperCasedCharacters, true], [specialCharacters, true], [numericCharacters, true]];
let selectedCharacters = lowerCasedCharacters;
options.forEach((opt) => {
    if (opt[1] === true) {
        selectedCharacters = selectedCharacters.concat(opt[0]);
    }
});

// Function to prompt user for password options
const getPasswordOptions = () => {
}

// Function for getting a random element from an array
const getRandom = (arr) => {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
// console.log(getRandom(specialCharacters));

// Function to generate password with user input
const generatePassword = () => {

}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
const writePassword = () => {
    const password = generatePassword();
    const passwordText = document.querySelector('#password');

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
