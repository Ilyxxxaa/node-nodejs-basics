import { readdir, mkdir, copyFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { ERROR_MESSAGE } from './utils.js';

const path1 = fileURLToPath(new URL('files', import.meta.url));
const path2 = fileURLToPath(new URL('copy_files', import.meta.url));

const copy = async () => {
  try {
    const files = await readdir(path1, { flag: 'wx' });
    await mkdir(path2);
    files.forEach(async (file) => {
      await copyFile(path.resolve(path1, file), path.resolve(path2, file));
    });
  } catch (err) {
    throw Error(ERROR_MESSAGE);
  }
};

await copy();
