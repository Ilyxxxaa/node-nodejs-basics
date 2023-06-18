import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { ERROR_MESSAGE } from './utils.js';

const filePath = fileURLToPath(new URL('files/fileToRead.txt', import.meta.url));

const read = async () => {
  try {
    const content = await readFile(filePath, 'utf-8');
    console.log(content);
  } catch (e) {
    throw new Error(ERROR_MESSAGE);
  }
};

await read();
