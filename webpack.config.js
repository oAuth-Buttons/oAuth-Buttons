const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const WebpackCleanPlugin = require('webpack-clean')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const WebpackIconfontPluginNodejs = require('webpack-iconfont-plugin-nodejs')
const glob = require('glob')
const path = require('path')

const css = ['./src/css/main.css']

Array.prototype.push.apply(css, glob.sync('./src/css/list/*.css'))

module.exports = {
  mode: 'development',
  entry: {
    'oauth-buttons.css': css,
    'oauth-buttons.min.css': css
  },
  output: {
    path: path.join(__dirname, 'dist', 'css'),
    filename: 'build/[name]'
  },
  module: {
    rules: [{
      test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          }, {
            loader: 'postcss-loader'
          }
        ]
    }]
  },
  plugins: [
    new WebpackIconfontPluginNodejs({
      fontName: 'oauth-buttons',
      cssPrefix: 'icon',
      svgs: path.join(__dirname, 'src', 'logo', '*.svg'),
      fontsOutput: path.join(__dirname, 'dist', 'fonts'),
      cssOutput: path.join(__dirname, 'dist', 'fonts', 'font.css'),
      namesOutput: path.join(__dirname, 'dist', 'fonts', 'names.txt')
    }),
    new MiniCssExtractPlugin({
      filename: '[name]'
    }),
    new WebpackCleanPlugin([
      'dist/build/oauth-buttons.css',
      'dist/build/oauth-buttons.min.css',
    ])
  ],
  optimization: {
    minimize: true,
    minimizer: [
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
    modules: ['node_modules']
  }
}
