import { rename as renameFile } from 'fs/promises';
import { join } from 'path';
import { getPath, ERR_MESSAGE } from '../utils.js';

const pathFolder = getPath(import.meta.url, 'files');

const rename = async () => {
    try {
        await renameFile(join(pathFolder, 'wrongFilename.txt'), join(pathFolder, 'properFilename.md'));
    } catch (err) {
        throw new Error(ERR_MESSAGE)
    }
};

await rename();
