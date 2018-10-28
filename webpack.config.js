const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const WebpackCleanPlugin = require('webpack-clean')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const IconfontWebpackPlugin = require('iconfont-webpack-plugin')
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
    path: path.resolve(__dirname, 'dist'),
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
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => [
                new IconfontWebpackPlugin(loader)
              ]
            }
          }
        ]
    }]
  },
  plugins: [
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
