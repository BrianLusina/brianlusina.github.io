export default {
    nodeEnv: process.env.NODE_ENV || 'development',
    env: process.env.ENV || 'development',
    debug: process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test',
  };
  