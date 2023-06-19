import { join } from 'path';
import { getPath, ERROR_MESSAGE} from '../utils.js'
import { readdir, copyFile, mkdir } from 'fs/promises';

const FOLDER_URL = getPath(import.meta.url, 'files');
const FOLDER_COPY_URL = getPath(import.meta.url, 'files_copy');

const copy = async () => {
    try {
        await mkdir(FOLDER_COPY_URL);
        const files = await readdir(FOLDER_URL);
        await Promise.all(files.map((i) => {
            copyFile(join(FOLDER_URL, i), join(FOLDER_COPY_URL, i));
        }));
    } catch {
        throw new Error(ERROR_MESSAGE);
    }
};

await copy();
