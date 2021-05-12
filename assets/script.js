import { inputValidation } from './inputValidation.js';
import { SPECIAL_CHARACTERS, ALPHABET, NUMBERS } from './stringChar.js'

// Write password to the #password input
let writePassword = () => {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Create and add event listener to generate button
let generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

//Func: create password
let generatePassword = () => {
  //Declare password
  let password = "";

  //Func inputValidation return length if valid
  let passwordLength = inputValidation();

  //Password parameters 
  let hasSpecialChar = confirm("Click Ok to confirm special characters");
  let hasLowerCase = confirm("Click Ok to confirm including lowercase character");
  let hasUpperCase = confirm("Click Ok to confirm including uppercase character");
  let hasNumbers = confirm("Click Ok to confirm including numbers");



  //Func: check length of password
  let isValidLength = password => password.length < passwordLength;

  //Func: concatenate a new character to password
  let addCharacter = (passwordParameter, isUpperCase = false) => {
    let character = passwordParameter[Math.floor(Math.random() * passwordParameter.length)];
    isUpperCase ? character = character.toUpperCase() : character
    password += character

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





