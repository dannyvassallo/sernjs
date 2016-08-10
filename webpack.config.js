var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './client/public');
var APP_DIR = path.resolve(__dirname, './client/app');
var STYLE_DIR = path.resolve(__dirname, './client/stylesheets');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      },
      {
        test: /\.scss$/,
        include : STYLE_DIR,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
};

module.exports = config;
