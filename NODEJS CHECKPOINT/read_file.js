//TASK 03 (Part B) - NODE.JS CHECKPOINT


// require the file system module
const fs = require('fs');

// read the content of the file "welcome.txt"
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // print the content of the file
  console.log(data); 
});