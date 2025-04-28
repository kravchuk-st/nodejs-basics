import { createReadStream } from 'fs';
import { getPath } from '../utils.js';

const pathFile = getPath(import.meta.url, 'files', 'fileToRead.txt');

const read = async () => {
    const stream = createReadStream(pathFile, 'utf-8');
    stream.pipe(process.stdout);
};

await read();
