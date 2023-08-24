var fs = require("fs");

console.log("Going to write into existing file");
fs.writeFile('welcome.txt', 'Hello Node!', function(err) {
if (err) {
    return console.error(err);
}

console.log("Data written successfully!");
console.log("Let's read newly written data");

fs.readFile('hello.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
});
});



// const fs = require('fs');

// // Writing to the file
// fs.writeFile('welcome.txt', 'Hello Node', (err) => {
//     if (err) throw err;
//     console.log('File "welcome.txt" has been created.');
// });

// // Reading from the file
// fs.readFile('welcome.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log('Content of "welcome.txt":', data);
// });

