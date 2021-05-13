const userParameterSelection = () => {
    let hasSpecialChar = confirm("Click Ok to confirm special characters");
    let hasLowerCase = confirm("Click Ok to confirm including lowercase character");
    let hasUpperCase = confirm("Click Ok to confirm including uppercase character");
    let hasNumbers = confirm("Click Ok to confirm including numbers");

    return {
        hasSpecialChar: hasSpecialChar,
        hasLowerCase: hasLowerCase,
        hasUpperCase: hasUpperCase,
        hasNumbers, hasNumbers
    }

}


export { userParameterSelection }