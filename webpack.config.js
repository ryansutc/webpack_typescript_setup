var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');

console.log(path.resolve(__dirname, './wwwroot/js/'));
module.exports = {
  mode: 'development',
  target: 'node',
  entry: {
    main: './wwwroot/js/main.ts'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, './wwwroot/js/'),
    filename: 'main.build.js'
  },
  devtool: "inline-source-map",
  plugins: [
    new WebpackNotifierPlugin()
  ]
};