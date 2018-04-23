const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const dotenv = require('dotenv');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: './config.development.env' });
} else if (process.env.NODE_ENV === 'test') {
  dotenv.config({ path: './config.test.env' });
}

module.exports = env => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');
  const mode = isProduction ? 'production' : 'development';
  return {
    mode,
    entry: ['babel-polyfill', 'whatwg-fetch', './src/app.js'],
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: CSSExtract.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                },
              },
            ],
          }),
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [CSSExtract, new webpack.DefinePlugin({}), new webpack.HotModuleReplacementPlugin()],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      port: 9000,
      publicPath: '/dist/',
      historyApiFallback: true,
      hot: true,
      inline: true,
      proxy: {
        '^/api/*': {
          target: 'http://localhost:3333/api/',
          secure: false,
        },
      },
    },
  };
};
