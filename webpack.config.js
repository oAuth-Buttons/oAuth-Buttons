const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CssEntryPlugin = require('css-entry-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    'oauth-buttons.js': './src/js/oauth-buttons.js',
    'oauth-buttons.min.js': './src/js/oauth-buttons.js',
    'oauth-buttons.css': './src/css/main.css'
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name]'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /(node_modules)/
    }, {
      loader: 'webpack-modernizr-loader',
      test: /\.modernizrrc\.js$/
    }, {
      test: /\.css$/,
      use: 'css-loader'
    }]
  },
  plugins: [
    new CssEntryPlugin({
      output: {
        filename: '[name]'
      }
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin({
      include: /\.min\.js$/,
      sourceMap: true
    })],
    concatenateModules: true
  },
  resolve: {
    modules: ['node_modules'],
    alias: {
      modernizr$: path.resolve(__dirname, ".modernizrrc.js")
    }
  }
}
