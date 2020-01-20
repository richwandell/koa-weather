module.exports = {
    entry: './public/src/js/index.jsx',
    output: {
        filename: 'App.js',
        path: __dirname + '/public/dist'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};