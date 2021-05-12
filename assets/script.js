import { inputValidation } from './inputValidation.js'
// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword(),
    passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Create password
function generatePassword() {

  //Validation return length if valid
  let passwordLength = inputValidation();

  //Password parameters 
  let okSpecialChar = confirm("Click Ok to confirm special characters");
  let okLowerCase = confirm("Click Ok to confirm including lowercase character");
  let okUpperCase = confirm("Click Ok to confirm including uppercase character");
  let okNumbers = confirm("Click Ok to confirm including numbers");
  let allSpecialChar = "!#$%&'“,()*+,-./:;<=>?@[]^_`{|}~";
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  //Declare password
  let password = "";

  //Func: check length of password
  let isValidLength = password => password.length < passwordLength

  //Func: concatenate a new character to password
  let addCharacter = (passwordParameter, isUpper = false) => {
    if (isUpper) {
      let index = Math.floor(Math.random() * passwordParameter.length);
      password += passwordParameter[index].toUpperCase();

    }
    else {
      let index = Math.floor(Math.random() * passwordParameter.length);
      password += passwordParameter[index];
    }
  }

  //Fill up password to passwordLength
  while (password.length < passwordLength) {

    if (okSpecialChar)
      if (isValidLength(password))
        addCharacter(allSpecialChar)

    if (okLowerCase)
      if (isValidLength(password))
        addCharacter(alphabet);

    if (okUpperCase)
      if (isValidLength(password))
        addCharacter(alphabet, true)

    if (okNumbers)
      if (isValidLength(password))
        addCharacter(numbers)
  }
  return password
}





