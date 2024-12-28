// import fs from 'fs';
import fs from 'fs/promises';

// // readFile() - callback
// fs.readFile('./test.txt', 'utf8', (err, data) => { 
//     if (err) throw err;
//     console.log(data);
// });

// // readFileSync() - Synchronous version
// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log(data);

// // readFile() - Promise .then()
// fs.readFile('./test.txt', 'utf8')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// readFile() - async/await
const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf8');
        console.log('File content:', data);
    } catch (error) {
        console.log('Error reading file:', error);
    }
};

// writeFile()

const writeFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'Hello, I am writing to this file');
        console.log('File written successfully...');
    } catch (error) {
      console.log('Error writing file:', error);
    }
};

// appendFile()
const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\nThis is appended text');
        console.log('File appended successfully...')
    } catch (error) {
        console.log('Error appending file:', error);
    }
}

const run = async () => {
    await writeFile(); // Ensure the file is written first
    await appendFile();
    await readFile(); // Then read the file
}

run();

// writeFile(); 
// appendFile();
// readFile();