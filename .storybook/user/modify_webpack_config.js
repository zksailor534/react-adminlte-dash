const path = require('path');

module.exports = function (config) {
  // This is the default webpack config defined in the `../webpack.config.js`
  // modify as you need.
  const PATHS = {
    src: path.join(__dirname, 'src'),
  };

  config = {
    entry: {
    components: PATHS.src,
    },
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
        {
          test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff',
        },
        { test: /\.(ttf|eot|svg|jpg|gif|png)(\?[\s\S]+)?$/, loader: 'file' },
      ],
    },
  };
};
