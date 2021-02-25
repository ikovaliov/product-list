const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: { main: ['./src/index.jsx'] },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  mode:'development',
  devServer: {
      port: 3001,
      open: true,
      historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx']
        },
        use: ["babel-loader", "eslint-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist']
        }),
    new HtmlWebpackPlugin({
      title: 'Product list',
      template: './public/index.html'
    })
  ]
};
