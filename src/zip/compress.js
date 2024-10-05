import { fileURLToPath } from 'url';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

const pathToOriginalFile = fileURLToPath(new URL('./files/fileToCompress.txt', import.meta.url));
const pathToArchive = fileURLToPath(new URL('./files/archive.gz', import.meta.url));

const compress = async () => {
  const readStream = createReadStream(pathToOriginalFile);
  const gzip = createGzip();
  const writeStream = createWriteStream(pathToArchive);
  await pipeline(readStream, gzip, writeStream);
};

await compress();
