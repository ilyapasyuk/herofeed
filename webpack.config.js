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
                    name: 'lib',
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
        extensions: ['.js', '.jsx'],
        alias: {
            Services: path.resolve(__dirname, 'src/Services/'),
            Constants: path.resolve(__dirname, 'src/Constants/'),
            Components: path.resolve(__dirname, 'src/Components/'),
        },
    },
}

if (process.env.NODE_ENV === ENV.PRODUCTION) {
    const MiniCssExtractPlugin = require('mini-css-extract-plugin')
    const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
    const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
    const Autoprefixer = require('autoprefixer')

    config.output.filename = '[name]-[chunkhash].js'

    config.plugins.push(
        new MiniCssExtractPlugin({
            filename: 'app-[chunkhash].css',
            chunkFilename: '[id].css',
        }),
    )
    config.module.rules.push({
        test: /\.(scss|css)$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    minimize: {
                        safe: true,
                    },
                },
            },
            {
                loader: 'postcss-loader',
                options: {
                    autoprefixer: {
                        browsers: ['last 2 versions'],
                    },
                    plugins: () => [Autoprefixer],
                },
            },
            {
                loader: 'sass-loader',
                options: {},
            },
        ],
    })

    config.optimization.minimizer.push(new UglifyJsPlugin())
    config.optimization.minimizer.push(new OptimizeCssAssetsPlugin({}))

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
