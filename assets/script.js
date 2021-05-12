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

function generatePassword() {
  //   Prompt user to create password 
  let passwordLength = prompt("How many characters would you like to include?");
  //Validate length
  if (!(passwordLength)) {
    return "Password was not created";
  }
  else {
    //Loop to validate numbers
    while (isNaN(passwordLength)) {
      passwordLength = prompt("This is not a number, try again:");
    }
    //Loop to validate input length
    while (passwordLength < 8 || passwordLength > 128) {
      passwordLength = prompt("Invalid password length, try again:");
    }
    //Variables 
    let okSpecialChar = confirm("Click Ok to confirm special characters"),
      okLowerCase = confirm("Click Ok to confirm including lowercase character"),
      okUpperCase = confirm("Click Ok to confirm including uppercase character"),
      okNumbers = confirm("Click Ok to confirm including numbers"),
      allSpecialChar = "!#$%&'“,()*+,-./:;<=>?@[]^_`{|}~",
      alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
      numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    password = "";

    //Loop to fill up password length
    while (password.length < passwordLength) {
      if (okSpecialChar && password.length < passwordLength) {
        let index = Math.floor(Math.random() * allSpecialChar.length);
        password = password + allSpecialChar.charAt(index);
        console.log(password);
      }
      if (okLowerCase && password.length < passwordLength) {
        let index = Math.floor(Math.random() * alphabet.length);
        password = password + alphabet[index];
        console.log(password);
      }
      if (okUpperCase && password.length < passwordLength) {
        let index = Math.floor(Math.random() * alphabet.length)
        password = password + alphabet[index].toUpperCase();
        console.log(password);
      }
      if (okNumbers && password.length < passwordLength) {
        console.log(password);
        let index = Math.floor(Math.random() * numbers.length);
        console.log(index);
        password = password + numbers[index];
        console.log(password);
      }
      if (!okSpecialChar && !okLowerCase && !okUpperCase && !okNumbers)
        return "No option selected";
    }
  }
  console.log("password before sending it: ", password)
  return password;
}




