import { fork } from 'child_process';
import { getPath } from '../utils.js';

const pathScript = getPath(import.meta.url, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    const childProcess = fork(pathScript, args, {silent: true});

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess(['someArgument1', 'someArgument2']);
