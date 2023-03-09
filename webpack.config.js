const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: "main.[contenthash].js",
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		assetModuleFilename: '[name][ext]',
	},
	plugins: [new HtmlWebpackPlugin({
		template: "./src/template.html"
		})
	],
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],	
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/,
				type: 'asset/resource',
			},
		]
	}
}