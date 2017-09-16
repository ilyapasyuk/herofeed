const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const ENV = {
    PRODUCTION: 'production',
    DEVELOPMENT: 'development'
};

const config = {
    entry: {
        app: './src/app'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        // Move all files from node modules to 'lib' chunk
        new webpack.optimize.CommonsChunkPlugin({
            name: 'lib',
            minChunks: (module) => {
                return module.context && (module.context.indexOf('node_modules') !== -1);
            }
        }),
        new HtmlPlugin({
            template: './src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                conservativeCollapse: true
            }
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.html$/,
            exclude: /node_modules/,
            use: [{
                loader: 'html-loader',
                options: {
                    attrs: false, // Don't require images
                    minimize: true,
                    removeComments: true,
                    collapseWhitespace: true,
                    conservativeCollapse: true
                }
            }]
        }]
    }
};


if (process.env.NODE_ENV === ENV.PRODUCTION) {
    const CleanPlugin = require('clean-webpack-plugin');
    const ExtractTextPlugin = require('extract-text-webpack-plugin');
    const autoprefixer = require('autoprefixer');

    config.output.filename = '[name]-[chunkhash].js';

    config.plugins.push(new ExtractTextPlugin('app-[contenthash].css'));
    config.module.rules.push({
        test: /\.scss/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract([{
            loader: 'css-loader',
            options: {
                minimize: true
            }
        }, {
            loader: 'postcss-loader',
            options: {
                plugins: [
                    autoprefixer({
                        browsers: ['last 2 versions']
                    })
                ]
            }
        }, {
            loader: 'sass-loader'
        }])
    });

    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin()
    );

    config.plugins.push(
        new CleanPlugin(['dist/*'])
    );
}


if (process.env.NODE_ENV === ENV.DEVELOPMENT) {
    config.module.rules.push({
        test: /\.scss/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
    });

    config.plugins.push(
        new webpack.HotModuleReplacementPlugin()
    );

    config.devServer = {
        contentBase: path.resolve(__dirname, 'dist'),
        open: true,
        hot: true
    };
}


module.exports = config;
