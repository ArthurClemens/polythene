var path = require('path');

module.exports = {
    entry: './apps/snackbar-app.js',
    output: {
        path: './apps',
        filename: 'sapp.js',
    },
    resolve: {
        alias: {
            polythene: path.resolve("./")
        }
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
}
