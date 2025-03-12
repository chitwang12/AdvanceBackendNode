const fs = require('fs');

class WriteFile {
  constructor() {}

  // Method to write data to a file
  // Use fs.writeFileSync() to write data to a file synchronously. This method takes two arguments: the file name and the data to write. It writes the data to the file and returns undefined. If an error occurs, it throws an error.
  writeToFileSync(fileName, data) {
    try {
      fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
      console.log(`Data has been written to ${fileName}`);
    } catch (error) {
      console.error('Error writing to file', error);
    }
  }

  async writeToFileAsync(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data, null, 2), (err) => {
      if (err) {
        console.log('Error writing to file', err);
        return;
      }
      console.log(`Data has been written to ${fileName}`);
    });
  }
}

module.exports = WriteFile;
