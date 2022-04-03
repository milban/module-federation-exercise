const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const path = require("path");

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3001,
    hot: true,
  },
  output: {
    publicPath: "auto",
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react"],
        }
      }
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "appShell",
      remotes: {
        'uiShell': "uiShell@[uiShellUrl]/remoteEntry.js",
      },
      shared: {
        react: { singleton: true },
        'react-dom/client': { singleton: true },
      }
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
  ]
}