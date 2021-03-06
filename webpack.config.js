/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

module.exports = (env, argv) => {
  let entry, distDir, output, devtool,
    devServer, resolvePlugins, resolve, rules,
    plugins;
  let htmlPlugin, miniCssExtractPlugin, tsconfigPathsPlugin;
  let webpackConfig;

  const isDevelopment = argv.mode !== 'production';

  entry = path.resolve(__dirname, 'src/main.tsx');
  distDir = path.resolve(__dirname, 'public');
  devtool = isDevelopment ? 'inline-source-map' : false,

  output = {
    path: distDir,
    publicPath: '/',
    filename: 'bundle.js',
  };

  devServer = {
    contentBase: distDir,
    historyApiFallback: true,
    hot: true,
    open: true,
    host: '0.0.0.0',
  };

  tsconfigPathsPlugin = new TsconfigPathsPlugin({
    configFile: './tsconfig.json',
  });
  console.log(tsconfigPathsPlugin);
  resolvePlugins = [
    tsconfigPathsPlugin,
  ];

  resolve = {
    plugins: resolvePlugins,
    modules: [
      'node_modules',
    ],
    alias: {
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom')
    },
    extensions: [ '.ts', '.tsx', '.js' ],
  },

  htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
  });
  miniCssExtractPlugin = new MiniCssExtractPlugin();

  plugins = [
    htmlPlugin,
  ];

  rules = [
    {
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'ts-loader'
        }
      ]
    },
    {
      test: /\.s?css$/,
      use: [
        isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'sass-loader',
      ],
    },
    {
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'fonts/',
      }
    },
  ];

  if(!isDevelopment) {
    plugins.push(miniCssExtractPlugin);
  }

  webpackConfig = {
    entry,
    output,
    devtool,
    devServer,
    module: {
      rules,
    },
    resolve,
    plugins,
  };

  return webpackConfig;
};
