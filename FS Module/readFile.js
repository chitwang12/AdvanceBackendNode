const fs = require('fs');

class ReadFile {
    constructor() {}

//     Reading Files
// Asynchronous Reading: Use fs.readFile() to read a file asynchronously. This method takes three arguments: the file name, the encoding type, and a callback function. The callback function is called with two arguments: error and data. If an error occurs, the error argument will contain the error message. If the file is read successfully, the data argument will contain the file content.
    readFromFileSync(fileName) {
        try {
            console.log(`Started Reading the file `);
            const data = fs.readFileSync(fileName, 'utf8');
            console.log(`File content: ${data.slice(0, 500)}...`);
            console.log('Length of data:', data.length);
        } catch (error) {
            console.error('Error reading from file', error);
        }
    }
//     Synchronous Reading: Use fs.readFileSync() to read a file synchronously. This method takes two arguments: the file name and the encoding type. It returns the file content as a string. If an error occurs, it throws an error. 
    async readFromFile(fileName) {
        try {
            fs.readFile(fileName, 'utf8', (err, data) => {
                if (err) {
                    console.log('Error reading file', err);
                    return;
                }
                console.log(`File content: ${data.slice(0, 500)}...`);
            });
        } catch (error) {
            console.error('Error reading file asynchronously', error);
        }
    }
}

module.exports = ReadFile;
