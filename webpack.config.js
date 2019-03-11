const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

const common = {
  context: __dirname + '/client',
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
};

const client = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  }
};

const server = {
  entry: `${SRC_DIR}/server.js`,
  target: 'node',
  output: {
    filename: 'bundle-server.js',
    path: DIST_DIR,
    libraryTarget: 'commonjs-module'
  }
};

module.exports = [
  Object.assign({}, common, client),
  Object.assign({}, common, server)
];