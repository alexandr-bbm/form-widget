const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

// todo объединить с основным конфигом.

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
		library: ['CompanyName'],
		libraryTarget: 'umd',
  },
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
	],
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
							minimize: true,
						}
					},
					'postcss-loader'
				]
			},
			{
				test: /\.svg$/,
				use: ['raw-loader']
			}
		]
  },
	resolve: {
  	modules: [
			path.join(__dirname, 'src'),
			'node_modules',
		],
	},
};
