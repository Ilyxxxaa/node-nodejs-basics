import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { stdin, stdout } from 'process';

const pathToScript = fileURLToPath(new URL('./files/script.js', import.meta.url));

const spawnChildProcess = async (args) => {
  const childProcess = spawn('node', [pathToScript, ...args]);

  stdin.on('data', (data) => {
    childProcess.stdin.write(data);
  });

  childProcess.stdout.on('data', (data) => {
    stdout.write(data);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['Thank', 'you', 'for', 'waiting']);
