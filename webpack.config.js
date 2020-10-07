// утилита path для превращения относительного пути в абсолютный
const path = require('path');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  }
}
