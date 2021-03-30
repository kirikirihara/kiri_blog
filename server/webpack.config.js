const path = require('path')
const Dotenv = require('dotenv-webpack')
const { EnvironmentPlugin } = require('webpack')

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.json', '.mjs', '.wasm'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, 'tsconfig.json'),
          },
        },
      },
    ],
  },
  plugins: [
    argv.mode === 'development'
      ? new Dotenv({ path: path.join(__dirname, '.env') })
      : new EnvironmentPlugin(Object.keys(process.env)),
  ],
}
