import { getPath } from '../utils.js';
import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const FILE_PATH = getPath(import.meta.url, 'files', 'fileToCompress.txt');
const ARCHIVE_PATH = getPath(import.meta.url, 'files', 'archive.gz');

const compress = async () => {
    const readStream = createReadStream(FILE_PATH, 'utf-8');
    const outStream = createWriteStream(ARCHIVE_PATH, {flags: 'w'});
    
    readStream.pipe(createGzip()).pipe(outStream);
};

await compress();
