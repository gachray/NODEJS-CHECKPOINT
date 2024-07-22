//TASK 04 - NODE.JS CHECKPOINT


//reuire generate-password package
const generatePassword = require('generate-password');

//create function to generate a random password
function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 12, 
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true
  });
  //call function to generate password and log to console
  console.log(`Generated password: ${password}`);
}

generateRandomPassword();