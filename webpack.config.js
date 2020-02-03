const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const ENV = {
    PRODUCTION: 'production',
    DEVELOPMENT: 'development',
}

const config = {
    entry: {
        app: './src/index.jsx',
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        chunkFilename: '[name].[chunkhash].chunk.js',
        filename: '[name].js',
    },
    optimization: {
        minimize: false,
        splitChunks: {
            cacheGroups: {
                default: false,
                commons: {
                    test: /node_modules/,
                    name: 'vendor',
                    chunks: 'initial',
                    minSize: 1,
                },
            },
        },
        minimizer: [],
    },
    plugins: [
        new HtmlPlugin({
            template: './src/index.ejs',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                conservativeCollapse: true,
            },
        }),
        new webpack.DefinePlugin({
            ENV: JSON.stringify(process.env.NODE_ENV),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                            removeComments: true,
                            collapseWhitespace: true,
                            conservativeCollapse: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            outputPath: './assets/',
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        alias: {
            Services: path.resolve(__dirname, 'src/Services/'),
            Constants: path.resolve(__dirname, 'src/Constants/'),
            Components: path.resolve(__dirname, 'src/Components/'),
            'react-dom': '@hot-loader/react-dom',
        },
    },
}

if (process.env.NODE_ENV === ENV.PRODUCTION) {
    const TerserPlugin = require('terser-webpack-plugin')

    config.output.filename = '[name]-[chunkhash].js'

    config.optimization.minimizer.push(new TerserPlugin())

    config.optimization.minimize = true
    config.mode = ENV.PRODUCTION
}

if (process.env.NODE_ENV === ENV.DEVELOPMENT) {
    config.plugins.push(new webpack.HotModuleReplacementPlugin())

    config.devServer = {
        contentBase: path.resolve(__dirname, 'public'),
        open: true,
        hot: true,
    }

    config.devtool = 'cheap-module-eval-source-map'
    config.mode = ENV.DEVELOPMENT
}

module.exports = config
