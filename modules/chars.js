// Function to get Characters
function getChars(start, end) {
  const chars = [];
  for (let i = start; i < end; i++) {
    chars.push(String.fromCharCode(i));
  }
  return chars;
}
// Array of special characters to be included in password
const specialCharacters = [...getChars(33, 47), ...getChars(59, 64), ...getChars(91, 96)];

// Array of numeric characters to be included in password
const numericCharacters = getChars(48, 58);

// Array of lowercase characters to be included in password
const lowerCasedCharacters = getChars(97, 122);

// Array of uppercase characters to be included in password
const upperCasedCharacters = getChars(65, 90);

export { specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters };
