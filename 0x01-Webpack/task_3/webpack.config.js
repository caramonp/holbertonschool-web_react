const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		all: ["./modules/header/header.js", "./modules/body/body.js", "./modules/footer/footer.js"],
		    /*header: './modules/header/header.js',
			body: './modules/body/body.js',
			footer: './modules/footer/footer.js'*/
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				use: ['file-loader'],
			},
		],
	},
	devServer: {
		contentBase: './public',
		port: 8564,
	},
	devtool: 'inline-source-map',
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin(),
	  ],
};
