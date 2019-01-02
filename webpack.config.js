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
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    optimization: {
        minimize: false,
        splitChunks: {
            cacheGroups: {
                default: false,
                commons: {
                    test: /node_modules/,
                    name: 'lib',
                    chunks: 'initial',
                    minSize: 1,
                },
            },
        },
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
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
                            attrs: false, // Don't require images
                            minimize: true,
                            removeComments: true,
                            collapseWhitespace: true,
                            conservativeCollapse: true,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
}

if (process.env.NODE_ENV === ENV.PRODUCTION) {
    const ExtractTextPlugin = require('extract-text-webpack-plugin')
    const autoprefixer = require('autoprefixer')

    config.output.filename = '[name]-[chunkhash].js'

    config.plugins.push(new ExtractTextPlugin('app-[chunkhash].css'))
    config.module.rules.push({
        test: /\.scss/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract([
            {
                loader: 'css-loader',
                options: {
                    minimize: true,
                },
            },
            {
                loader: 'postcss-loader',
                options: {
                    plugins: [
                        autoprefixer({
                            browsers: ['last 2 versions'],
                        }),
                    ],
                },
            },
            {
                loader: 'sass-loader',
            },
        ]),
    })

    config.optimization.minimize = true
    config.mode = ENV.PRODUCTION
}

if (process.env.NODE_ENV === ENV.DEVELOPMENT) {
    config.module.rules.push({
        test: /\.scss/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
    })

    config.plugins.push(new webpack.HotModuleReplacementPlugin())

    config.devServer = {
        contentBase: path.resolve(__dirname, 'dist'),
        open: true,
        hot: true,
    }
    config.mode = ENV.DEVELOPMENT
}

module.exports = config
