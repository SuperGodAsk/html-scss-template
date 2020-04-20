/*
 * @title Webpack Config
 */

// Dependencies
import webpack from 'webpack';

// Config
import {paths} from './gulpfile.babel.js/config';

const path = require('path');

// Plugins
var WebpackNotifierPlugin = require('webpack-notifier');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


const webpackConfig = {

  mode: process.env.NODE_ENV ? 'production' : 'development',

  entry: {
    app: paths.scripts.src,
  },
  output: {
    filename: '[name].js',
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test(module, chunks) {
            if (!String(module.context).includes('node_modules')) {
              return false;
            }

            if (['nouislider'].some(str => String(module.context).includes(str))) {
              return false;
            }

            return true;
          },
          name: 'vendor',
          chunks: 'all',
          minSize: 0,
          reuseExistingChunk: true
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /^(?!.*\.{test,min}\.js$).*\.js$/,
        exclude: /node_modules\/(?!(swiper|dom7)\/).*/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.s?css$/,
        include: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [
    // ensure that we get a production build of any dependencies
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new WebpackNotifierPlugin({
      skipFirstNotification: true,
    }),
  ],
  externals: {
    jquery: 'jQuery',
  },
  resolve: {
    alias: {
      Modules: path.resolve(__dirname, 'src/modules/'),
      Components: path.resolve(__dirname, 'src/scripts/components/'),
      Utils: path.resolve(__dirname, 'src/scripts/utils/'),
    },
  },

};

if (process.env.NODE_ENV === 'production') {
  // console.log('Welcome to production');

}
if (process.env.NODE_ENV === 'development') {
  // console.log('Welcome to development');
  webpackConfig.devtool = 'source-map';
}

module.exports = webpackConfig;
