var config = {
    entry: './app/main.js',

    output: {
        path: __dirname,
        filename: 'index.js',
    },

    devServer: {
        inline: true,
        port: 8080
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}

module.exports = config;