import { getPath } from '../utils.js';
import { fork } from 'child_process';

const SCRIPT_PATH = getPath(import.meta.url, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    const childProcess = fork(SCRIPT_PATH, args, {silent: true});

    process.stdin.pipe(childProcess.stdin);

    childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess(['someArgument1', 'someArgument2']);
