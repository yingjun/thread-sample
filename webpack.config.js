const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ThreadsPlugin = require('threads-plugin');

module.exports = {
  entry: {
    server: './src/master.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  plugins: [new ThreadsPlugin()],
  target: 'node',

  externals: [nodeExternals()], // Need this to avoid error when working with Express
  module: {
    rules: [
      {
        // Transpiles ES6-8 into ES5
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
