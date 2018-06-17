// state rules for babel loader

// This plugin will generate html files with scripts injected 
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader" // it will look for .babelrc
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        },
        {
          test: /\.css$/,
          /*
            webpack read from right to left 
            style-loader is used to add <style></style> into <head></head> of HTML
            Modular CSS so that class names will be available locally to the component
          */
         use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader",
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: "[name]_[local]_[hash:base64]", // class name will be based on component name
                sourceMap: true,
                minimize: true
              }
            }
          ]
        },
        {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                limit: 10000
                }
            }
        }
      ]
    },
    plugins: [htmlPlugin]
};