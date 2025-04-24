import { mkdir, readdir, copyFile } from 'fs/promises';
import { join } from 'path';
import { getPath, ERR_MESSAGE } from '../utils.js';

const pathFolder = getPath(import.meta.url, 'files');
const pathFolderCopy = getPath(import.meta.url, 'files_copy');

const copy = async () => {
    try {
        await mkdir(pathFolderCopy);
        const files = await readdir(pathFolder)
        await Promise.all(files.map(el => copyFile(join(pathFolder, el), join(pathFolderCopy, el))))
    } catch (err) {
        throw new Error(ERR_MESSAGE)
    }
};

await copy();
