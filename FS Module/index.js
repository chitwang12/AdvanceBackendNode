const axios = require('axios');
const WriteFile = require('./writeFile');
const ReadFile = require('./readFile');

const fetchDataAndProcess = async () => {
    try {
        const data = [];
        const totalRecords = 100000;
        const recordsPerRequest = 10000;
        const totalRequests = totalRecords / recordsPerRequest;

        for (let i = 0; i < totalRequests; i++) {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            data.push(...response.data);
            console.log(`Fetched ${data.length} records...`);
        }

        const writeFile = new WriteFile();
        writeFile.writeToFileSync('data.json', data);

        const readFile = new ReadFile();
        readFile.readFromFileSync('data.json');
    } catch (error) {
        console.error('Error in processing:', error);
    }
};

// Call the function to fetch, write, and read data
fetchDataAndProcess();
