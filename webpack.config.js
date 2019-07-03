var path = require('path');

module.exports = {
    entry: [
      './app/index.js',
      './app/styles.scss'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "script-loader"
          }
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "styles.css"
              }
            },
            {
              loader: "extract-loader"
            },
            {
              loader: "css-loader",
              options: {
                modules: true,
                importLoaders: 2,
                sourceMap: true,
              }
            },
            {
              loader: "postcss-loader"
            },
            {
              loader: "sass-loader"
            }
        ]
        }
      ]
    }
};
