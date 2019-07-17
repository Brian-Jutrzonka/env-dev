import path from 'path';

export default {
  debug: true,
  devtool: 'source-map', 
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel',
          query: {
              presets: ['react', 'es2015']
          }
      },
      {
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass']
      } 
    ]
  }
}