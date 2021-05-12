import { inputValidation } from './inputValidation.js';
import { SPECIAL_CHARACTERS, ALPHABET, NUMBERS } from './stringChar.js'
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
  let hasSpecialChar = confirm("Click Ok to confirm special characters");
  let hasLowerCase = confirm("Click Ok to confirm including lowercase character");
  let hasUpperCase = confirm("Click Ok to confirm including uppercase character");
  let hasNumbers = confirm("Click Ok to confirm including numbers");


  //Declare password
  let password = "";

  //Func: check length of password
  let isValidLength = password => password.length < passwordLength

  //Func: concatenate a new character to password
  let addCharacter = (passwordParameter, isUpperCase = false) => {
    if (isUpperCase) {
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

    if (hasSpecialChar)
      if (isValidLength(password))
        addCharacter(SPECIAL_CHARACTERS)

    if (hasLowerCase)
      if (isValidLength(password))
        addCharacter(ALPHABET);

    if (hasUpperCase)
      if (isValidLength(password))
        addCharacter(ALPHABET, true)

    if (hasNumbers)
      if (isValidLength(password))
        addCharacter(NUMBERS)
  }
  return password
}





