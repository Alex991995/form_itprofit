import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import HtmlWebpackPlugin from 'html-webpack-plugin';


const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].[contenthash].js', // Add contenthash for cache busting
    path: resolve(__dirname, 'dist'),
    clean: true,  // Clean the dist folder before each build
  },
  mode: 'none',

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject : 'body'
      
    }),
  ],

  devServer: {
    static: {
      directory: resolve(__dirname, 'dist'),
    },
    port: 8080, // Choose the port for your server
    open: true, // Automatically open the browser
    hot: false,
    compress: true, // Enable gzip compression
  },
};
