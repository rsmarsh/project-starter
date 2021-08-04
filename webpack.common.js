module.exports = {
  entry: './src/index.tsx',
  target: 'node',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.scss', '.css']
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
      }
    ]
  },
  plugins: []
};
