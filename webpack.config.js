const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Pokedex',
      meta: {
        viewport: 'width=device-width, initial-scale=1.0, shrink-to-fit=no'
      }
    })
  ],
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              //Prefer `dartsass`
              implementation: require('sass')
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpeg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  }
};
