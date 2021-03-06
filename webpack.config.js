const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: "./dist"
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'index.[contenthash].js',
  },
  optimization: {
    runtimeChunk: 'single',
  },
  plugins: 
  [new HtmlWebpackPlugin({
    title: 'Bob',
    template: 'src/assets/index.html'
  }),new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/i,
        loader: ["file-loader"]
      },
      {
        test: /\.less$/i,
        loader: ["style-loader","css-loader","less-loader"]
      },
        {
          test: /\.styl$/i,
          loader: ["style-loader","css-loader","stylus-loader"]
        },
        {
          test: /\.scss$/i,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                implementation: require("dart-sass")
              }
            },
          ]
        }
    ],
  },
}