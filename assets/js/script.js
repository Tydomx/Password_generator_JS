// Assignment code here
  var upperCase=  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  console.log(upperCase);
  var lowerCase= "abcdefghijklmnopqrstuvqxyz".split("")
  var symbol= "!@#$%^&*()_+~\/`|{}[]:;?<>,.-=".split("")
  var number= "1234567890".split("")

// gets user Input between 8 and 128 characters also stops user if input is not number
function userInput() {
  var passwordLength = window.prompt("How long would you like your password to be between 8 and 128 characters?");
      if (isNaN(passwordLength)) {
        alert("Hey you need to enter a number");
        return;
      } 
      if (passwordLength < 8 || passwordLength > 128) {
        alert("please enter a password between 8 and 128 characters!");
        return;
      }
  var upperCaseConfirm = window.confirm("Would you like the password to have upperCase characters?");
  var lowerCaseConfirm = window.confirm("Would you like the password to have lowerCase characters?");
  var symbolConfirm = window.confirm("Would you like the password to have symbols?"); 
  var numberConfirm = window.confirm("Would you like the password to have numbers?");  
  
      if (upperCaseConfirm === false && lowerCaseConfirm === false && symbolConfirm === false && numberConfirm === false) {
        alert("you need to check at least 1 character type!");
        return;
      }
    
  var userData = {
    passwordLength: passwordLength,
    lowerCaseConfirm: lowerCaseConfirm,
    upperCaseConfirm: upperCaseConfirm,
    numberConfirm: numberConfirm,
    symbolConfirm: symbolConfirm
  }
  return userData;
}


// randomizes the numbers for you
function randomizer(array) {
  var index = Math.floor(Math.random() * array.length)
  console.log(index);
  var char = array[index]
  console.log(char);
  return char;
}

// password is generated depending on user's choices
function generatePassword() {
  var passwordData = userInput();
  console.log(passwordData);
  var allUserChoices = [];
    if(passwordData.lowerCaseConfirm === true) {
      allUserChoices = allUserChoices.concat(lowerCase)
    }
    if (passwordData.upperCaseConfirm === true) {
      allUserChoices = allUserChoices.concat(upperCase)
    }
    if (passwordData.symbolConfirm === true) {
      allUserChoices = allUserChoices.concat(symbol)
    }
    if (passwordData.numberConfirm === true) {
      allUserChoices = allUserChoices.concat(number)
    }
    console.log(allUserChoices);

    var password = [];
    for (var i=0; i < passwordData.passwordLength; i++) {
      password.push(randomizer(allUserChoices));
    }
    console.log("password", password.join(""));
    return password.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
