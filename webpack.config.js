const path = require('path')

module.exports = {
  entry: './src/static/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src/static'),
  },
}
