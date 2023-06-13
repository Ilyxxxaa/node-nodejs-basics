import { rename as renameFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { ERROR_MESSAGE } from './utils.js';

const originalFilePath = fileURLToPath(new URL('wrongFilename.txt', import.meta.url));
const renamedFilePath = fileURLToPath(new URL('properFilename.md', import.meta.url));

const rename = async () => {
  try {
    await renameFile(originalFilePath, renamedFilePath);
  } catch {
    throw Error(ERROR_MESSAGE);
  }
};

await rename();
