// Imports
import {
  specialCharacters,
  numericCharacters,
  lowerCasedCharacters,
  upperCasedCharacters,
} from './modules/chars.js';

// Generate password length options
const weakOptions = document.querySelector('.weak');
const mediumOptions = document.querySelector('.medium');
const strongOptions = document.querySelector('.strong');

for (let i = 10; i < 65; i++) {
  if (i < 30) {
    weakOptions.innerHTML += `<option value="${i}">${i}</option>`;
  } else if (i < 50) {
    mediumOptions.innerHTML += `<option value="${i}">${i}</option>`;
  } else {
    strongOptions.innerHTML += `<option value="${i}">${i}</option>`;
  }
}

// Function to prompt user for password options
function getPasswordOptions() {
  const passwordLength = document.getElementById('passwordlength').value;
  const lowerCaseChecked = document.getElementById('lowercasechars').checked;
  const upperCaseChecked = document.getElementById('uppercasechars').checked;
  const numericChecked = document.getElementById('numericchars').checked;
  const specialCharactersChecked = document.getElementById('specialchars').checked;
  const options = [
    [lowerCasedCharacters, lowerCaseChecked],
    [upperCasedCharacters, upperCaseChecked],
    [numericCharacters, numericChecked],
    [specialCharacters, specialCharactersChecked],
  ];

  // Include all characters if no options selected
  const noOption = lowerCasedCharacters.concat(upperCasedCharacters, specialCharacters, numericCharacters);

  // Loop through options and create an array of all selected characters
  let selectedCharacters = [];
  options.forEach(opt => {
    if (opt[1] === true) {
      selectedCharacters = selectedCharacters.concat(opt[0]);
    }
  });
  // Return an array of password length and all selected characters
  return [passwordLength, selectedCharacters, noOption];
}

// Function for getting a random element from an array
const getRandom = arr => {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

// Function to generate password with user input
const generatePassword = arr => {
  let password = '';
  // Get password length for password options
  const passwordLength = getPasswordOptions()[0];
  // Loop the length of the password, select a random
  // character from array and concatnate to password variable
  for (let i = 0; i < passwordLength; i++) {
    password += getRandom(arr);
  }

  return password;
};

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
const writePassword = () => {
  // Get selected characters from password options
  // or all charaters if no option selected
  const noOption = getPasswordOptions()[2];
  const selectedCharacters = getPasswordOptions()[1];
  let password = [];

  // If no option is selected, a random 16 charater
  // password from all characters will be generated
  if (selectedCharacters.length === 0) {
    password = generatePassword(noOption);
  } else {
    password = generatePassword(selectedCharacters);
  }

  const passwordText = document.querySelector('#placeholder');
  passwordText.setAttribute('class', 'password');
  passwordText.textContent = password;
};

// Add event listener to generate button
generateBtn.addEventListener('click', () => {
  writePassword();
  // Copy password
  const password = document.querySelector('.password');
  password.addEventListener('mouseover', () => {
    password.setAttribute('style', 'cursor: pointer');
  });

  password.addEventListener('mouseenter', () => {
    document.querySelector('#copy').textContent = 'Click to copy';
  });
  password.addEventListener('mouseleave', () => {
    document.querySelector('#copy').textContent = '';
  });

  password.addEventListener('click', () => {
    navigator.clipboard.writeText(password.textContent);
    document.querySelector('#copy').textContent = 'Copied to clipboard';
  });
});
