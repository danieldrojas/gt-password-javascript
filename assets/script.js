// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {

  //   Prompt user to create password `

  alert("Create password?");
  var passwordLength = prompt("How many characters would you like to include?");
 
  if(!(passwordLength)) {

  
    var password = "You did not create a password";
    return password;



     
  }
  else {

  
   
    //Loop to validate input 
    while (passwordLength < 8 || passwordLength > 128) {
      passwordLength = prompt("Invalid password length, Try again");
    }


    //Variables 

    var okSpecialChar = confirm("Click Ok to confirm special characters");

    var okLowerCase = confirm("Click Ok to confirm including lowercase character");

    var okUpperCase = confirm("Click Ok to confirm including uppercase character");

    var okNumbers = confirm("Click Ok to confirm including numbers");

    password = "";

    var allSpecialChar = "!#$%&'“,()*+,-./:;<=>?@[]^_`{|}~";

    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


    //Outsider loop to fill password length
    while (password.length < passwordLength) {

      if (okSpecialChar && password.length < passwordLength) {

        var index = Math.floor(Math.random() * (allSpecialChar.length + 1)) - 1;

        password = password + allSpecialChar.charAt(index);

        console.log(password);
      }

      if (okLowerCase && password.length < passwordLength) {

        var index = Math.floor(Math.random() * alphabet.length) - 1;

        password = password + alphabet[index];

        console.log(password);
      }


      if (okUpperCase && password.length < passwordLength) {

        var index = Math.floor(Math.random() * alphabet.length)

        password = password + alphabet[index].toUpperCase();

        console.log(password);

      }

      console.log(password);

      if (okNumbers && password.length < passwordLength) {

        console.log(password);

        var index = Math.floor(Math.random() * numbers.length);

        console.log(index);

        password = password + numbers[index];

        console.log(password);

      }



    }
    return password;


  }

}


