var webpack = require('webpack');

module.exports = {
	cache: false,
	entry: './index',
	output: {
		filename: 'bundle.min.js',
		path: './assets',
		publicPath: './assets/' // path that will be considered when requiring files (note trailing slash)
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['', '.js', '.json', '.html'], // to use require('file') instead of require('file.js')
		modulesDirectories: ['polythene'], // for lookup: require('polythene/lib/my-module')
		alias: {
			mithril: "../../node_modules/mithril"
		}
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
        		warnings: false
    		}
		})
	],
	module: {
		loaders: [
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
			{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }
        ]
    }
};