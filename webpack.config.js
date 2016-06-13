const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Declare webpack configuration object
let config = {};

const PATHS = {
  src: path.join(__dirname, 'src'),
  demo: path.join(__dirname, 'src', 'app.js'),
  dist: path.join(__dirname, 'dist'),
};

const common = {
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      // Javascript & React loader
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-2'],
        },
      },
      // CSS style loader
      { test: /\.css$/, loaders: ['style', 'css'] },
      // SCSS style loader
      { test: /\.less$/, loaders: ['style', 'css', 'less'] },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      { test: /\.(ttf|eot|svg|jpg|gif|png)(\?[\s\S]+)?$/, loader: 'file' },
    ],
  },
};

const build = {
  entry: {
    components: PATHS.src,
  },
  output: {
    path: PATHS.dist,
    filename: 'index.js',
  },
};

const dev = {
  entry: {
    demo: path.join(__dirname, 'src', 'app.js'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ReactJS AdminLTE Demo',
    }),
  ],
  devtool: 'source-map',
};

switch (process.env.npm_lifecycle_event) {
  case 'start':
    config = merge(common, dev);
    break;
  default:
    config = merge(common, build);
}

module.exports = config;
