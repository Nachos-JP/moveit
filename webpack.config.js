const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "/src/index.js"),
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  corejs: 3,
                },
              ],
            ],
            plugins: [
              "@babel/plugin-proposal-class-properties",
            ],
          },
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "moveit.js",
    library: "Moveit",
    libraryExport: "default",
    libraryTarget: "umd",
    globalObject: "this",
  },
};
