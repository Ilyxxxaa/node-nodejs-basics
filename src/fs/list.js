import { readdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { ERROR_MESSAGE } from './utils.js';

const filesFolderPath = fileURLToPath(new URL('files', import.meta.url));

const list = async () => {
  try {
    const files = await readdir(filesFolderPath, { flag: 'wx' });
    console.log(files);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await list();
