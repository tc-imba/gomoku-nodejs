const webpcak = require('webpack');
const path = require('path');

function root(fn) {
  return path.resolve(__dirname, fn);
}

module.exports = {
  entry: [
    './src/main.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  target: 'node',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules\//,
        use: {
          loader: 'eslint-loader',
          options: {
            configFile: root('.eslintrc.yml'),
          },
        },
      },
      {
        // babel
        test: /\.js$/,
        exclude: /node_modules\//,
        use: [
          {
            loader: 'babel-loader'
          },
        ],
      },
    ],
  },

};