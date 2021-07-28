const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["@babel/polyfill", "./src/index.tsx"],
  output: {
    path: path.resolve(__dirname, "build"), //
    filename: "[name].js",
    publicPath: "/",
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [
    new HTMLWebpackPlugin({ template: "./src/index.html" }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(jpg|png|jpeg|svg)$/,
        use: ["file-loader"],
      },
      {
        test: /\.m?(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
};
