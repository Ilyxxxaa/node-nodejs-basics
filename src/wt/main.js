import os from 'os';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';

const pathToWorker = fileURLToPath(new URL('./worker.js', import.meta.url));

const performCalculations = async () => {
  const arrayOfCPU = os.cpus();
  let i = 10;

  const workersArray = arrayOfCPU.map((_, index) => {
    return new Promise((resolve) => {
      const worker = new Worker(pathToWorker, { workerData: index + i });
      worker.on('message', (data) => resolve({ status: 'resolved', data }));
      worker.on('error', () => resolve({ status: 'error', data: null }));
    });
  });

  const result = await Promise.all(workersArray);
  console.log(result);
};

await performCalculations();
