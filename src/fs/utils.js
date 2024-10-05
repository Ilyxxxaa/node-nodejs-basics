import { stat } from 'fs/promises';

export const ERROR_MESSAGE = 'FS operation failed';

export const isPathExist = async (path) => {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
};
