import { readFile } from 'fs/promises';
import { createHash } from 'crypto';
import { getPath } from '../utils.js';

const filePath = getPath(import.meta.url, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    try {
        const fileContent = await readFile(filePath);
        const hash = createHash('sha256').update(fileContent).digest('hex')

        console.log(hash);
    } catch (error) {
        throw error;
    }
};

await calculateHash();
