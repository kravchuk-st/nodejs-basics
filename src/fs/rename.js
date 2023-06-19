import { join } from 'path';
import { getPath, ERROR_MESSAGE} from '../utils.js';
import { rename as renameFile } from 'fs/promises';

const FOLDER_URL = getPath(import.meta.url, 'files');

const rename = async () => {
    try {
        await renameFile(join(FOLDER_URL, 'wrongFilename.txt'), join(FOLDER_URL, 'properFilename.md'))
    } catch {
        throw new Error(ERROR_MESSAGE);
    }
};

await rename();
