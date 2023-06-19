import { getPath, ERROR_MESSAGE} from '../utils.js';
import { readdir } from 'fs/promises';

const FOLDER_URL = getPath(import.meta.url, 'files');

const list = async () => {
    try {
        const files = await readdir(FOLDER_URL);
        console.log(files);
    } catch {
        throw new Error(ERROR_MESSAGE);
    }
};

await list();
