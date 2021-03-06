export let inputValidation = () => {
    let passwordLength = prompt("How many characters would you like to include?");
    //Validate length
    while (!passwordLength) {
        passwordLength = prompt("Invalid length, How many characters would you like to include?");

    }
    //Loop to validate input length
    while (passwordLength < 8 || passwordLength > 128) {
        passwordLength = prompt("Invalid password length, try again:");
    }
    //Validate type numbers
    while (isNaN(passwordLength)) {
        passwordLength = prompt("This is not a number, try again:");
    }
    return parseInt(passwordLength);
}