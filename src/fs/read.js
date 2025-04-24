import { readFile } from 'fs/promises';
import { getPath, ERR_MESSAGE } from '../utils.js';

const filePath = getPath(import.meta.url, 'files', 'fileToRead.txt')

const read = async () => {
    try {
        await readFile(filePath, 'utf-8').then(data => console.log(data));
    } catch (err) {
        throw new Error(ERR_MESSAGE)
    }
};

await read();
