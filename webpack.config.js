const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader", "postcss-loader",
				],
			},
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "index.css",
			chunkFilename: "index.css"
		}),
		new HtmlWebPackPlugin({
			template: "./public/index.html",
			filename: "index.html"
		}),
	]
};
