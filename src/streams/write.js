import { createWriteStream } from 'fs';
import { getPath } from '../utils.js';

const pathFile = getPath(import.meta.url, 'files', 'fileToWrite.txt');

const write = async () => {
    const stream = createWriteStream(pathFile, {flags: 'a'});
    process.stdin.pipe(stream);
};

await write();
