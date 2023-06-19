import { getPath } from '../utils.js';
import { createReadStream } from 'fs';

const FILE_PATH = getPath(import.meta.url, 'files', 'fileToRead.txt');

const read = async () => {
    const readStrim = createReadStream(FILE_PATH, 'utf-8');
    readStrim.pipe(process.stdout);
};

await read();
