const path = require("path");

module.exports = (env) => {
    console.log("env", env);
  return {
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.jsx?$/,
          exclude: /node_modules$/,
        },
        {
          test: /\.s?css$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    mode: env.production ? "production" : "development",
    devtool: env.production ? "source-map" : "eval-cheap-module-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
    },
  };
};

// module.exports = {
//   entry: "./src/app.js",
//   output: {
//     path: path.join(__dirname, "public"),
//     filename: "bundle.js",
//   },
//   module: {
//     rules: [
//       {
//         loader: "babel-loader",
//         test: /\.jsx?$/,
//         exclude: /node_modules$/,
//       },
//       {
//         test: /\.s?css$/,
//         use: ["style-loader", "css-loader", "sass-loader"],
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".js", ".jsx"],
//   },
//   mode: "development",
//   devtool: "eval-cheap-module-source-map",
//   devServer: {
//     contentBase: path.join(__dirname, "public"),
//     historyApiFallback: true,
//   },
// };
