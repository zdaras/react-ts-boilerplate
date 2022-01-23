import webpack, { Configuration as WebpackConfiguration } from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import Dotenv from 'dotenv-webpack';
import path from 'path';

import { PATHS } from './paths';
import {
	tsConfigDev,
	htmlConfig,
	cssConfig,
	fontsConfig,
	svgConfig,
	svgCSSConfig,
	imagesConfig,
	mediaConfig
} from './webpack.rules';

interface IConfiguration extends WebpackConfiguration {
	devServer?: WebpackDevServerConfiguration;
}

const config: IConfiguration = {
	mode: 'development',
	entry: ['react-hot-loader/patch', './src/index.tsx'],
	context: PATHS.root,
	output: {
		path: PATHS.dist,
		filename: '[name].js',
		sourceMapFilename: '[name].bundle.map',
		chunkFilename: '[name].chunk.js',
		publicPath: '/'
	},
	module: {
		rules: [tsConfigDev, htmlConfig, cssConfig, fontsConfig, svgConfig, svgCSSConfig, imagesConfig, mediaConfig]
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
		new Dotenv({ path: PATHS.envDevelopment }),
		new HtmlWebPackPlugin({
			template: './src/assets/index.html',
			filename: './index.html',
			inject: true
		}),
		new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('development') } }),
		new CopyWebpackPlugin({ patterns: [{ from: 'src/assets/', to: 'assets/', globOptions: { ignore: ['*.scss'] } }] }),
		new MiniCssExtractPlugin({ filename: '[name].css', chunkFilename: '[id].css' })
	],
	cache: true,
	bail: false,
	devtool: 'inline-source-map',
	devServer: {
		liveReload: false,
		hot: true,
		open: true,
		port: 8080,
		historyApiFallback: true,
		client: { overlay: false, logging: 'error' },
		static: [path.join(__dirname, '../dist'), path.join(__dirname, '../src')]
	},
	stats: 'errors-only',
	performance: { hints: 'warning' },
	optimization: { splitChunks: { chunks: 'all' } }
};

module.exports = config;
