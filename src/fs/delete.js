import { getPath, ERROR_MESSAGE} from './utils.js';
import { rm } from 'fs/promises';

const FILE_URL = getPath(import.meta.url, 'files', 'fileToRemove.txt');

const remove = async () => {
    try {
        await rm(FILE_URL);
    } catch {
        throw new Error(ERROR_MESSAGE);
    }
};

await remove();
