const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

var WebpackNotifierPlugin = require('webpack-notifier');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
//const MinifyPlugin = require('babel-minify-webpack-plugin');

var srcFolder = "./wwwroot/src";
var distFolder = "./wwwroot/dist";

module.exports = {
  mode: 'production',
  target: 'node',
  entry: [
    srcFolder + "/css/main.scss",
    '@babel/polyfill',
    'whatwg-fetch',
    srcFolder + '/js/main.ts'
  ],
  module: {
    rules: [
      {

        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {

        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: false }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "resolve-url-loader",
            options: { includeRoot: true }
          },
          "sass-loader?sourceMap"
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, distFolder),
    filename: '[name]_[chunkhash].js',
    publicPath: ""
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      })
    ],
    /*
    splitChunks: {
      chunks: 'all'
      maxInitialRequests: Infinity,
      minSize: 30,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          }
        }
      }
    },
    */
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebPackPlugin({
      title: "Webpack Typescript Setup Template",
      template: srcFolder + "/index.ejs",
      favicon: srcFolder + "/assets/favicon.ico",
      filename: "./index.html"
    }),
    //new webpack.HashedModuleIdsPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
      chunkFilename: "[id].css"
    }),
    //new WebpackNotifierPlugin()
  ],
  resolve: {
    modules: [
      path.resolve(__dirname, "/src"),
      path.resolve(__dirname, "node_modules/")
    ],
    extensions: [".ts", ".tsx", ".js", ".scss", ".css"]
  },
  devtool: "inline-source-map"
};