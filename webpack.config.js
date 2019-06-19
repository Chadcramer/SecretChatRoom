// css loader
// import css from 'file.css';

module.exports = {
    entry: __dirname + "/client/index.js",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          },
        },
        {
          test: /\.css$/i,
          exclude: /node_modules/,
          use: [
            {loader: "style-loader"},
            {loader: "css-loader"}
          ],
        },
      ]
    },
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
    }, 
  }