import { writeFile } from "fs/promises";
import { isPathExist } from "./utils.js";

const FILE_PATH = "files/fresh.txt";
const CONTENT = "I am fresh and young";
const url = new URL(FILE_PATH, import.meta.url);

const create = async () => {
  try {
    await writeFile(url, CONTENT, { flag: "wx" });
  } catch (err) {
    if (await isPathExist(url)) {
      throw new Error("FS operation failed");
    }
  }
};

await create();
