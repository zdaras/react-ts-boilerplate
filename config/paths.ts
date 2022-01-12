import path from 'path';

export const resolve: (path: string) => string = path.resolve.bind(__dirname);

export const PATHS: Record<string, string> = {
	src: resolve('./src'),
	root: resolve('./'),
	dist: resolve('./dist'),
	assets: resolve('./src/assets'),
	utils: resolve('./src/utils'),
	components: resolve('./src/components'),
	pages: resolve('./src/pages'),
	nodeModules: resolve('./node_modules'),
	env: resolve('./.env'),
	envProd: resolve('./.env.production'),
	envDevelopment: resolve('./.env.development')
};
