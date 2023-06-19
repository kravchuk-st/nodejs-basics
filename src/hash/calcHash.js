import { getPath } from '../utils.js';
import { readFile } from 'fs/promises';
import { createHash } from 'crypto';

const FILE_PATH = getPath(import.meta.url, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    try {
        const fileContent = await readFile(FILE_PATH);
        const hash = createHash('sha256').update(fileContent).digest('hex')

        console.log(hash);
    } catch (error) {
        throw error;
    }
};

await calculateHash();
