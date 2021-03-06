import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { PATHS } from './paths';

export const tsConfig: webpack.RuleSetRule = {
	test: /\.tsx?$/,
	use: [
		{
			loader: 'ts-loader',
			options: {
				transpileOnly: true,
				configFile: 'tsconfig.json'
			}
		}
	],
	exclude: PATHS.nodeModules,
	include: PATHS.src
};

export const tsConfigDev: webpack.RuleSetRule = {
	test: /\.tsx?$/,
	use: [
		'react-hot-loader/webpack',
		{
			loader: 'ts-loader',
			options: {
				configFile: 'tsconfig.dev.json'
			}
		}
	],
	exclude: PATHS.nodeModules,
	include: PATHS.src
};

export const htmlConfig: webpack.RuleSetRule = {
	test: /\.html$/,
	use: [
		{
			loader: 'html-loader',
			options: {
				minimize: true
			}
		}
	]
};

export const postcssPlugins: string[] = [
	// require('postcss-easy-import'),
	// require('postcss-url')({ url: 'rebase' }),
	// require('postcss-utilities'),
	// require('postcss-flexbugs-fixes'),
	require('autoprefixer')()
];

export const cssConfig: webpack.RuleSetRule = {
	test: /(\.css|\.scss)$/,
	use: [
		'css-hot-loader',
		MiniCssExtractPlugin.loader,
		'css-loader',
		// {
		// 	loader: 'postcss-loader',
		// 	options: {
		// 		plugins: (loader: any): string[] => {
		// 			return loader.hot
		// 				? postcssPlugins
		// 				: [...postcssPlugins, require('cssnano')({ discardComments: { removeAll: true } })];
		// 		}
		// 	}
		// },
		'sass-loader'
	]
};

export const fontsConfig: webpack.RuleSetRule = {
	test: /\.(eot|otf|ttf|woff|woff2)$/,
	use: 'file-loader'
};

export const svgConfig: webpack.RuleSetRule = {
	test: /\.svg$/,
	issuer: /\.tsx?$/,
	exclude: /node_modules/,
	loader: 'svg-inline-loader'
};

export const svgCSSConfig: webpack.RuleSetRule = {
	test: /\.svg$/,
	issuer: /\.s?css?$/,
	use: [
		{
			loader: 'url-loader',
			options: {
				limit: 10 * 1024
			}
		}
	]
};

export const imagesConfig: webpack.RuleSetRule = {
	test: /\.(jpg|png|gif|ico)$/,
	use: [
		{
			loader: 'url-loader',
			options: {
				limit: 10 * 1024
			}
		},
		{
			loader: 'image-webpack-loader',
			options: {
				mozjpeg: {
					enabled: true,
					progressive: true
				},
				gifsicle: {
					interlaced: false
				},
				optipng: {
					optimizationLevel: 7
				},
				pngquant: {
					quality: [0.65, 0.9],
					speed: 4
				}
			}
		}
	]
};

export const mediaConfig: webpack.RuleSetRule = {
	test: /\.(mp3|mp4|webm)$/,
	use: {
		loader: 'url-loader',
		options: {
			limit: 10000
		}
	}
};
