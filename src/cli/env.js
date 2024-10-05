const prefix = 'RSS_';

const parseEnv = () => {
  for (let key in process.env) {
    if (key.startsWith(prefix)) {
      const value = process.env[key];
      console.log(`${key}=${value}`);
    }
  }
};

parseEnv();
