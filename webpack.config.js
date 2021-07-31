const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["@babel/polyfill", "./src/index.tsx"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.[fullhash].js",
    publicPath: "/",
    clean: true,
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      title: "Happy Repo",
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        exclude: /node_modules/,
        type: "asset/resource",
      },
      {
        test: /\.m?(js|jsx|ts|tsx)$/i,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  // devtool: "source-map", // turn off on final production
};
