import { getPath, ERROR_MESSAGE} from '../utils.js'
import { writeFile } from 'fs/promises';

const FILE_TEXT = 'I am fresh and young';

const create = async () => {
    const FILE_URL = getPath(import.meta.url, 'files', 'fresh.txt');
    
    try {
        await writeFile(FILE_URL, FILE_TEXT, { flag: 'wx'});
    } catch {
        throw new Error(ERROR_MESSAGE);
    }
};

await create();
