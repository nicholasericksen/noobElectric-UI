var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        path.join(__dirname, '/public/js/index.jsx')
    ],
    output: {
        path: path.join(__dirname, '/public/static'),
        filename: "bundle.js",
        publicPath: 'public/static'
    },
    // watchOptions: {
    //     poll: 1000,
    //     aggregateTimeout: 1000
    // },
    module: {
        rules: [{
                test: /\.less$/,
                use: [{
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "less-loader" // compiles Less to CSS
                    }
                ]
            },
            {
                test: /\.js?$/,
                use: [{
                        loader: 'react-hot-loader/webpack'
                    },
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2015', 'react']
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/,
                use: [{
                    loader: 'react-hot-loader/webpack'
                }, {
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'react']
                    }
                }],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        hot: true
    },
    plugins: []
};
