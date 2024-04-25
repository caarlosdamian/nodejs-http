// import fs from 'fs';
import fs from 'fs/promises';

// readFile() - callback
// fs.readFile('./test.txt', 'utf-8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// readFileSync() - Syncronous version

// const data = fs.readFileSync('./test.txt', 'utf-8');
// console.log(data);

// readFile()- Promise .then()
// fs.readFile('./test.txt', 'utf-8')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// readFile()- Promise async/await
// fs.readFile('./test.txt', 'utf-8')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const readfile = async () => {
  try {
    const data = await fs.readFile('./test.txt', 'utf-8');
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// writeFile()

const writeFile = async () => {
  try {
    const file = fs.writeFile('./test.txt', 'Hello testeando ando');
    console.log('Completed');
  } catch (error) {}
};

// appendFile()

const appendFile = async () => {
  try {
    await fs.appendFile('./test.txt', '\n This is appended text');
    console.log('completed');
  } catch (error) {}
};
writeFile();
appendFile();
readfile();
