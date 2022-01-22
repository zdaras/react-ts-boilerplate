import webpack, { Configuration as WebpackConfiguration } from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import Dotenv from 'dotenv-webpack';
import CompressionPlugin from 'compression-webpack-plugin';

import { PATHS } from './paths';
import {
	tsConfig,
	htmlConfig,
	cssConfig,
	fontsConfig,
	svgConfig,
	svgCSSConfig,
	imagesConfig,
	mediaConfig
} from './webpack.rules';

const BrotliPlugin: any = require('brotli-webpack-plugin');

const config: WebpackConfiguration = {
	mode: 'production',
	entry: ['./src/index.tsx'],
	context: PATHS.root,
	output: {
		path: PATHS.dist,
		filename: '[name].[chunkhash].bundle.js',
		sourceMapFilename: '[name].[chunkhash].bundle.map',
		chunkFilename: '[name].[chunkhash].chunk.js',
		publicPath: '/'
	},
	module: {
		rules: [tsConfig, htmlConfig, cssConfig, fontsConfig, svgConfig, svgCSSConfig, imagesConfig, mediaConfig]
	},
	resolve: {
		alias: {
			'@': PATHS.src,
			'@src': PATHS.src,
			'@root': PATHS.root,
			'@assets': PATHS.assets,
			'@utils': PATHS.utils,
			'@components': PATHS.components,
			'@pages': PATHS.pages,
			'react-dom': '@hot-loader/react-dom'
		},
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
		modules: ['src', 'node_modules']
	},
	plugins: [
		new Dotenv({ path: PATHS.env }),
		new HtmlWebPackPlugin({
			template: './src/assets/index.html',
			filename: './index.html',
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true
			}
		}),
		new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
		new CopyWebpackPlugin({ patterns: [{ from: 'src/assets/', to: 'assets/', globOptions: { ignore: ['*.scss'] } }] }),
		new MiniCssExtractPlugin({ filename: '[name].[chunkhash].css', chunkFilename: '[id].[chunkhash].css' }),
		new BrotliPlugin({
			asset: '[path].br[query]',
			test: /\.(js|css|html|svg)$/,
			threshold: 10240,
			minRatio: 0.8
		}),
		new CompressionPlugin()
	],
	cache: true,
	bail: false,
	devtool: false,
	stats: 'errors-only',
	performance: { hints: 'warning' },
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					compress: {
						comparisons: false
					},
					mangle: true,
					output: {
						comments: false,
						ascii_only: true
					}
				},
				parallel: true
			})
		],
		nodeEnv: 'production',
		sideEffects: true,
		concatenateModules: true,
		splitChunks: {
			chunks: 'all',
			minSize: 30000,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'all'
				},
				main: {
					chunks: 'all',
					minChunks: 2,
					reuseExistingChunk: true,
					enforce: true
				}
			}
		},
		runtimeChunk: true
	}
};

module.exports = config;
