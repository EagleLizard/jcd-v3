/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = (env, argv) => {
  let webpackConfig;

  const isDevelopment = argv.mode !== 'production';

  const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html',
    favicon: './src/favicon.ico'
  });
  const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
  });
  const forkTsCheckerWebpackPlugin = new ForkTsCheckerWebpackPlugin();
  const terserPlugin = new TerserPlugin({
    extractComments: false,
  });

  webpackConfig = {
    entry: path.resolve(__dirname, 'src/main.tsx'),
    devtool: isDevelopment ? 'source-map' : false,
    watch: isDevelopment ? true : false,
    output: {
      publicPath: '/',
      filename: '[name].[contenthash].js',
      path: DIST_DIR,
      clean: true,
    },
    optimization: {
      minimize: isDevelopment ? false : true,
      minimizer: [
        terserPlugin,
      ],
      moduleIds: 'deterministic',
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          vendorStyles: {
            test: /[\\/]node_modules[\\/]/,
            type: 'css/mini-extract',
            name: 'vendor-styles',
            chunks: 'all',
            enforce: true,
          }
        }
      },
    },
    devServer: {
      historyApiFallback: true,
      hot: true,
      open: true,
      // host: '0.0.0.0',
      host: '127.0.0.1',
      port: 9469,
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
            }
          ]
        },
        {
          test: /\.s?css$/,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader', // translates CSS into CommonJS
              options: { importLoaders: 2 }, // tell that you are running your styles through two other loaders before this one
            },
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'sass-loader', // compiles Sass to CSS
            },
          ],
        },
        {
          test: /\.(woff(2)?|ttf|eot)$/,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[hash][ext]',
          }
        },
      ],
    },
    resolve: {
      alias: {
        'react': path.resolve(__dirname, './node_modules/react'),
        'react-dom': path.resolve(__dirname, './node_modules/react-dom')
      },
      extensions: [
        '.ts',
        '.tsx',
        '.js',
        '.jsx',
        '.css',
      ],
    },
    plugins: [
      htmlPlugin,
      miniCssExtractPlugin,
      forkTsCheckerWebpackPlugin,
    ],
  };

  return webpackConfig;
};
