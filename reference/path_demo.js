const path = require("path");

// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));
// console.log(__dirname); // it is the same

// File extension
console.log(path.extname(__filename));

// create path object
console.log(path.parse(__filename));

// concatinate path
console.log(path.join(__dirname, 'test', 'hello.html'));