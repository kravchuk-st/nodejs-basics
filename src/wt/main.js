import { getPath } from '../utils.js';
import { cpus } from 'os';
import { Worker } from 'worker_threads';

const number = 10;
const cp = cpus();
const WORKER_PATH = getPath(import.meta.url, '', 'worker.js');

const performCalculations = async () => {
    const workersResalt = (workerData) => new Promise((res) => {
        const worker = new Worker(WORKER_PATH, {workerData})

        worker.on('message', (data) => res({ status: 'resolved', data }));
        worker.on('error', () => res({ status: 'error', data: null }));
    });

    const calc = cp.map((val, i) => workersResalt(number + i));
    const resalt = await Promise.all(calc);

    console.log(resalt);
};

await performCalculations();
