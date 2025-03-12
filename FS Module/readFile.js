const fs = require('fs');

class ReadFile {
    constructor() {}

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
