const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  // ... otras configuraciones de Webpack ...
  entry: './src/index.js', // Asegúrate de que este sea el punto de entrada correcto
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Ruta a tu archivo HTML de plantilla
      filename: './index.html' // Nombre del archivo HTML generado en la carpeta dist
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};