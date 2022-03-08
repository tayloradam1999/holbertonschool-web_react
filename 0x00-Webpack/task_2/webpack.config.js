const path = require('path');

module.exports = {
	mode: 'production',
	entry: './js/dashboard_main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: ['file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							bypassonDebug: true,
							disable: true,
						},
					},
				],
			}
		]
	}
};