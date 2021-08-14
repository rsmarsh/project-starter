const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.scss', '.css', '.svg'],
    alias: {
      Components: path.resolve(__dirname, 'src/components/'),
      Assets: path.resolve(__dirname, 'src/assets/')
    }
  },
  module: {
    rules: [
      // ES6 > ES5
      {
        test: /.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

      // TypeScript > ES6 JS
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },

      // SCSS > CSS
      {
        test: /\.scss$/,
        use: [
          // creates 'style' nodes from JS strings
          'style-loader',
          // translates CSS into CommonJS
          'css-loader',
          // composes Sass to CSS
          'sass-loader'
        ]
      },

      // SVG > React component
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      }
    ]
  }
};
