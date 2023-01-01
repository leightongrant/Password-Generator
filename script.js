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
    const upperCaseChecked = document.getElementById('uppercasechars').checked;
}

// Function for getting a random element from an array
const getRandom = (arr) => {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// Function to generate password with user input
const generatePassword = (arr) => {
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        password += getRandom(arr);
    }
    return password;
}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
const writePassword = () => {
    const password = generatePassword(selectedCharacters);
    const passwordText = document.querySelector('#password');
    passwordText.value = password;
    console.log(ucase.checked);
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);




