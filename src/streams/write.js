import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { stdin } from 'process';
import { pipeline } from 'stream/promises';

const pathToFile = fileURLToPath(new URL('./files/fileToWrite.txt', import.meta.url));

const write = async () => {
  const writeStream = createWriteStream(pathToFile, { flags: 'a' });
  await pipeline(stdin, writeStream);
};

await write();
