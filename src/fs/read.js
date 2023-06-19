import { getPath, ERROR_MESSAGE} from '../utils.js';
import { readFile } from 'fs/promises';

const FILE_URL = getPath(import.meta.url, 'files', 'fileToRead.txt');

const read = async () => {
    try {
        const fileContent = await readFile(FILE_URL, 'utf8');
        console.log(fileContent);
    } catch {
        throw new Error(ERROR_MESSAGE);
    }
};

await read();
