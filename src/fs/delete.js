import { rm } from 'fs/promises';
import { getPath, ERR_MESSAGE } from '../utils.js';

const pathFile = getPath(import.meta.url, 'files', 'fileToRemove.txt');

const remove = async () => {
    try {
        await rm(pathFile);
    } catch (err) {
        throw new Error(ERR_MESSAGE)
    }
};

await remove();
