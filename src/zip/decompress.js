import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createUnzip } from 'zlib';
import { getPath } from '../utils.js';

const pathArchiv = getPath(import.meta.url, 'files', 'archive.gz');
const pathFile = getPath(import.meta.url, 'files', 'fileToCompress.txt');

const decompress = async () => {
    const readStream = createReadStream(pathArchiv);
    const outStream = createWriteStream(pathFile);

    await pipeline(readStream, createUnzip(), outStream);
};

await decompress();
