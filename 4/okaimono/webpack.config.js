const path = require('path');

module.exports = {
  mode: 'development',

  entry: './src/scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'app/scripts'),
    filename: 'bundle.js',
    publicPath: '/scripts/',
  },

  devServer: {
    hot: true,
    open: ['index.html'],
    static: {
      directory: './app',
      watch: true
    },
    devMiddleware: { index: 'index.html' },
    historyApiFallback: true,
    port: 4500
  },

  module: {
    rules: [
      {
        test: /\.riot$/,
        exclude: /node_modules/,
        use: [{
          loader: '@riotjs/webpack-loader',
          options: {
            hot: true
          }
        }]
      }
    ]
  }
};
