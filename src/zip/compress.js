import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createGzip } from 'zlib';
import { getPath } from '../utils.js';

const pathFile = getPath(import.meta.url, 'files', 'fileToCompress.txt');
const pathFileArchived = getPath(import.meta.url, 'files', 'archive.gz');

const compress = async () => {
    const readStream = createReadStream(pathFile, 'utf-8');
    const outStream = createWriteStream(pathFileArchived, {flags: 'w'});
    
    await pipeline(readStream, createGzip(), outStream)
};

await compress();
