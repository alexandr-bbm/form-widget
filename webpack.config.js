const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = !isProduction;

let config = {
	entry: [
		'./src/index',
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		library: ['CompanyName'],
		libraryTarget: 'umd',
		publicPath: '/dist/',
	},
	plugins: [new webpack.IgnorePlugin(/moment/)],
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ['babel-loader'],
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
							minimize: isProduction,
							sourceMap: isDevelopment,
							localIdentName: isDevelopment ? '[local]--[hash:base64:5]' : undefined,
						}
					},
					'postcss-loader'
				]
			},
			{
				test: /\.svg$/,
				use: ['raw-loader']
			}
		],
		noParse: [/moment.js/,]
	},
	resolve: {
		modules: [
			path.join(__dirname, 'src'),
			'node_modules',
		],
	},
	devtool: isDevelopment ? 'cheap-module-eval-source-map': undefined,
};

if (isProduction) {
	config.plugins = config.plugins.concat([
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
	]);
}

module.exports = config;