import * as path from 'path'
import webpack, {Configuration} from 'webpack'
import HtmlWebPackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CopyPlugin from 'copy-webpack-plugin'

// Environment 
const isProduction = process.env.NODE_ENV === 'production';

const webpackConfig : Configuration = {
    devtool: !isProduction ? 'source-map' : false,
    target: 'web',
    mode: isProduction ? 'production' : 'development',
    entry: {
        main: './src/index.tsx',
        materialui: [
            './helpers/css/bootstrap.min.css',
            './helpers/css/paper-kit.scss',
        ]
        
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/',
        clean: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.css', '.jpg'],
        fallback: {
            // This is to fix the polifylls errors
            buffer: require.resolve('buffer'),
            crypto: require.resolve("crypto-browserify"),
            stream: require.resolve("stream-browserify")
        }
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss|css)$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                  },
                  {
                    loader: 'css-loader',
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      postcssOptions: {
                        plugins: [['autoprefixer']],
                      },
                    },
                  },
                  {
                    loader: 'sass-loader',
                  },
                ],
              },
            {
                test: /\.(ts|tsx)$/,
                use: {
                    loader: 'ts-loader',
                    options:{
                        transpileOnly: true
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    optimization:{
        splitChunks: {
            // THis will split our bundles into vendor.js and main.js
            cacheGroups:{
                chunks:'all',
                default: false,
                commons: {
                    test: /node_modules/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new CopyPlugin({
            patterns: [
              {
                from: './helpers/imgs', to: './images',
              },
            //   {
            //     from: paths.src.video, to: paths.dist.video,
            //   }
            ],
          }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
            publicPath: !isProduction ? 'http://localhost:8080/' : ''
            // for dev we will read the bundle from localhost:8080(webpack-dev-server)
        }),
        new MiniCssExtractPlugin({
            filename: './' + "[name].css",
        }),
    ]
};

export default webpackConfig