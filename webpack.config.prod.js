const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[contenthash].js',
  },
  optimization: {
    runtimeChunk: 'single',
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Bob',
    template: 'src/assets/index.html'
  })],
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation:require("dart-sass")
            }
          }
        ],
      },
    ],
  },
}