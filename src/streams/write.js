import { getPath } from '../utils.js';
import { createWriteStream } from 'fs';

const FILE_PATH = getPath(import.meta.url, 'files', 'fileToWrite.txt');

const write = async () => {
    const writeStrim = createWriteStream(FILE_PATH, {flags: 'a'});
    process.stdin.pipe(writeStrim);
};

await write();
