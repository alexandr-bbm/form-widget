const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
		library: ['CompanyName'],
		libraryTarget: 'umd',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin('[name].bundle.css'),
	],
  module: {
		rules: [
			{
				test: /\.js$/,
				use: ['react-hot-loader', 'babel-loader'],
				include: path.join(__dirname, 'src')
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true,
							sourceMap: true,
							localIdentName: '[local]--[hash:base64:5]',
						}
					},
					'postcss-loader'
				]
			},
			{
				test: /\.svg$/,
				use: ['raw-loader']
			},
		]
  },
	resolve: {
  	modules: [
			path.join(__dirname, 'src'),
			'node_modules',
		],
	},
};
