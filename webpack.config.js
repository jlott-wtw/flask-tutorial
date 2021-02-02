const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: './src/static/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src/static'),
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic',
                },
              ],
            ],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
    ],
  },
}
