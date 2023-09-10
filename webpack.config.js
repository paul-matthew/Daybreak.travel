const path = require("path");
const webpack = require("webpack");

const CopyWebpackPlugin = require("copy-webpack-plugin");

const dirApp = path.join(__dirname, "src/js");
const dirNode = "node_modules";

module.exports = {
  entry: [path.join(dirApp, "app.js")],

  output: {
    sourceMapFilename: "[file].map[query]",
    filename: "app.js"
  },

  resolve: {
    modules: [dirApp, dirNode]
  },

  plugins: [new webpack.DefinePlugin({})],

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },

  optimization: {
    minimize: true
  }
};
