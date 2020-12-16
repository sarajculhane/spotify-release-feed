
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [

      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", 'sass-loader']
      }

    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "public/dist"),
    publicPath: "public/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 8888,
    publicPath: "http://localhost:8888/"
  },
  plugins: [new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    template: "./public/index.html",
    minify: { collapseWhitespace: true, removeComments: true },
    inject: false
  })],
  devtool: "source-map"
};