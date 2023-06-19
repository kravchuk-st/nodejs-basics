import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const ERROR_MESSAGE = 'FS operation failed';

export const getPath = (url, folder, file) => {
  const __filename = fileURLToPath(url);
  const __dirname = dirname(__filename);

  if (file) {
    return join(__dirname, folder, file);
  }
  
  return join(__dirname, folder);
};
