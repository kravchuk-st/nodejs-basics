import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { getPath } from '../utils.js';
import { pipeline } from 'stream/promises';

const FILE_PATH = getPath(import.meta.url, 'files', 'fileToCompress.txt');
const ARCHIVE_PATH = getPath(import.meta.url, 'files', 'archive.gz');

const decompress = async () => {
  const inp = createReadStream(ARCHIVE_PATH);
  const out = createWriteStream(FILE_PATH);
  
  await pipeline(inp, createUnzip(), out);
};

await decompress();
