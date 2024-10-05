const PREFIX = '--';

const parseArgs = () => {
  const args = process.argv.reduce((acc, value, index, array) => {
    if (value.startsWith(PREFIX)) {
      const string = `${value.replace(PREFIX, '')} is ${array[index + 1]}`;
      return [...acc, string];
    }
    return acc;
  }, []);

  console.log(args.join(', '));
};

parseArgs();
