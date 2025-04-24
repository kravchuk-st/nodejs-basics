import { Transform, pipeline } from 'stream';

const reversStr = (str) => `${str.split('').filter(el => el !== '\n').reverse().join('')}\n\n`;

const transform = async () => {
    const transformStrim = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, reversStr(chunk.toString()));
        },
    });

    pipeline(process.stdin, transformStrim, process.stdout, (err) => console.error(err))
};

await transform();
