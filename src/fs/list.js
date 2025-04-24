import { readdir } from 'fs/promises';
import { getPath, ERR_MESSAGE } from '../utils.js';

const folderPath = getPath(import.meta.url, 'files');

const list = async () => {
    try {
        await readdir(folderPath).then(data => console.log(data));
    } catch (err) {
        throw new Error(ERR_MESSAGE)
    }
};

await list();
