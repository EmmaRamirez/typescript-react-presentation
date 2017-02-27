const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/index.tsx',
  devtool: 'source-map',
  output: {
    path: 'dist',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        loader: 'tslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx']
  }
};

module.exports = config;
