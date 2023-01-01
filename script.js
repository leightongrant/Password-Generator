import { specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters } from "./modules/chars.js";

// Function to prompt user for password options
const getPasswordOptions = () => {

}

// Function for getting a random element from an array
const getRandom = (arr) => {

}

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
