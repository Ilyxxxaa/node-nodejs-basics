import { fileURLToPath } from 'url';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';

const pathToOriginalFile = fileURLToPath(new URL('./files/fileToCompress.txt', import.meta.url));
const pathToArchive = fileURLToPath(new URL('./files/archive.gz', import.meta.url));

const decompress = async () => {
  const readStream = createReadStream(pathToArchive);
  const unzip = createUnzip();
  const writeStream = createWriteStream(pathToOriginalFile);
  await pipeline(readStream, unzip, writeStream);
};

await decompress();
