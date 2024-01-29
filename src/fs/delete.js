import { rm } from "fs/promises";
import { fileURLToPath } from "url";
import { ERROR_MESSAGE } from "./utils.js";

const filePath = fileURLToPath(
  new URL("files/fileToRemove.txt", import.meta.url)
);

const remove = async () => {
  try {
    await rm(filePath);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await remove();
