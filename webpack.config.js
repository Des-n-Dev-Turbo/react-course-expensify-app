const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const CSSExtract = new MiniCssExtractPlugin({ filename : "styles.css" });
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
          use: [
            MiniCssExtractPlugin.loader, 
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            }, 
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ],
        },
      ],
    },
    plugins: [
      CSSExtract
    ],
    resolve: {
      extensions: [".js", ".jsx"],
    },
    mode: env.production ? "production" : "development",
    devtool: env.production ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
    },
  };
};

