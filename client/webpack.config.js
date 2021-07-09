const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Dynamic html page generation
let htmlPageNames = ["index", "conduct"];
let multipleHtmlPlugins = htmlPageNames.map((name) => {
  return new HtmlWebpackPlugin({
    template: `./assets/${name}.html`, // relative path to the HTML files
    filename: `${name}`, // output HTML files
  });
});

module.exports = {
  mode: "development",
  entry: {
    index: "./js/index.js",
    conduct: "./js/copywriting.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "./assets/[name][ext]",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    compress: true,
    hot: true,
  },
  plugins: [
    new MiniCssExtractPlugin(),
    // Generates default index.html
    new HtmlWebpackPlugin({
      template: "./assets/index.html",
    }),
  ].concat(multipleHtmlPlugins), // Rest of the html pages

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
