module.exports = {
  context: __dirname,
  entry: "./js_picross.jsx",
  output: {
    path: "./",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react']
        }
      },
      {
        test: /\.node$/,
        loader: "node-loader"
      }
    ]
  },
  devtool: "source-maps"
};
