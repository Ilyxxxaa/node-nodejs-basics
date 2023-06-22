import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';

const pathToFile = fileURLToPath(new URL('./files/fileToCalculateHashFor.txt', import.meta.url));

const calculateHash = async () => {
  const fileContent = await readFile(pathToFile);
  console.log(createHash('sha256').update(fileContent).digest('hex'));
};

await calculateHash();
