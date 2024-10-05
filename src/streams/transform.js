import { stdout, stdin } from 'process';
import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const transform = async () => {
  const reverseString = (value) => value.split('').reverse().join('');

  const transformStream = new Transform({
    transform(chunk, _, cb) {
      cb(null, reverseString(chunk.toString('utf-8')));
    },
  });

  await pipeline(stdin, transformStream, stdout);
};

await transform();
