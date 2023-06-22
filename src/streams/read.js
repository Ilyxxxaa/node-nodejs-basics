import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import { stdout } from 'process';

const pathToFile = fileURLToPath(new URL('./files/fileToRead.txt', import.meta.url));

const read = async () => {
  const readStream = createReadStream(pathToFile);
  readStream.pipe(stdout);
};

await read();
