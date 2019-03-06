module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'fluffy',
      password: 'troiscubed',
      database: 'espndev',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
  production: {
    client: 'postgresql',
    connection: {
      host: 'ec2-34-219-142-73.us-west-2.compute.amazonaws.com',
      user: 'fluffy',
      password: 'troiscubed',
      database: 'espn',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
};
