import { writeFile } from 'fs/promises';
import { getPath, ERR_MESSAGE } from '../utils.js';

const filePath = getPath(import.meta.url, 'files', 'fresh.txt');
const fileContent = 'I am fresh and young';

const create = async () => {
    try {
        await writeFile(filePath, fileContent, {flag: 'wx'});
    } catch (err) {
        throw new Error(ERR_MESSAGE)
    }
};

await create();
