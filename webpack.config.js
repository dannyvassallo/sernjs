var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var BUILD_DIR = path.resolve(__dirname, './client/public/build');
var APP_DIR = path.resolve(__dirname, './client/app');
var STYLE_DIR = path.resolve(__dirname, './client/stylesheets');

var config = {
  entry: [
    "materialize-loader!./materialize-config/materialize.config.js",
    APP_DIR + '/index.jsx'
  ],
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
        loader: ExtractTextPlugin.extract('css!sass')
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader:"url?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file"
      }
    ]
  },
  alias: {
    'react$': path.join(__dirname, 'node_modules', 'react','dist','react.min.js'),
    'react-dom$': path.join(__dirname, 'node_modules', 'react-dom','dist','react-dom.min.js')
  },
  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true
    }),
    new webpack.DefinePlugin({
      "process.env": {
         NODE_ENV: JSON.stringify("production")
       }
    })
  ]
};

module.exports = config;
