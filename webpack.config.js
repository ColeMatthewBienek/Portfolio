const path = require("path");

module.exports = {
  // Path to my entry file
  entry: path.resolve(__dirname, "client/index.js"),

  // path to where I want my webpack compiled code (bundle) to be saved
  output: {
    path: path.resolve(__dirname, "client/dist"),
    filename: "bundle.js",
  },

  // Babel config for react
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: ["file-loader"],
      },
    ],
  },

  // resolve.extensions will allow use of *require* or *import* without typing extensions
  // (as long as the extension is in this list)
  // this property is optional
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },

  // devServer will serve your react static files for testing only
  // This property is optional
  // You must npm install webpack-dev-server for this to work
  devServer: {
    //
    static: path.resolve("client/dist"),
  },
};
