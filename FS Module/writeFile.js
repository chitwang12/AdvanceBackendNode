const fs = require('fs');

class WriteFile {
  constructor() {}

  // Method to write data to a file
  writeToFile(fileName, data) {
    try {
      fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
      console.log(`Data has been written to ${fileName}`);
    } catch (error) {
      console.error('Error writing to file', error);
    }
  }
}

module.exports = WriteFile;
