const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const WebpackCleanPlugin = require('webpack-clean')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    'oauth-buttons.js': './src/js/oauth-buttons.js',
    'oauth-buttons.min.js': './src/js/oauth-buttons.js',
    'oauth-buttons.css': './src/css/main.css',
    'oauth-buttons.min.css': './src/css/main.css'
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
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name]'
    }),
    new WebpackCleanPlugin([
      'dist/js/oauth-buttons.css',
      'dist/js/oauth-buttons.css.map',
      'dist/js/oauth-buttons.min.css',
      'dist/js/oauth-buttons.min.css.map'
    ])
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        include: /\.min\.js$/,
        sourceMap: true
      }),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /css\/oauth-buttons\.min\.css/g,
        cssProcessorOptions: {
          map: {
            inline: false,
            annotation: true,
          }
        },
        canPrint: true
      })
    ],
    concatenateModules: true
  },
  resolve: {
    modules: ['node_modules'],
    alias: {
      modernizr$: path.resolve(__dirname, ".modernizrrc.js")
    }
  }
}
