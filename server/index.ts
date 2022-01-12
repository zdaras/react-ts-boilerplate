const path = require('path');
const fs = require('fs');
const Koa = require('koa');
const serve = require('koa-static');

const app = new Koa();

const host = 'http://localhost';
const port = parseInt(process.env.APP_PORT, 10) || 80;

app.use(serve(path.resolve(process.cwd(), './dist'), { maxage: 20 * 24 * 60 * 60 * 1000 })); // 20 days

app.use(async (ctx, next) => {
	const html = fs.readFileSync(path.join(path.resolve(process.cwd(), './dist'), 'index.html'), 'utf-8');
	ctx.body = html;
	await next();
});

app.listen(port, () => {
	console.log(`Listening on ${host}:${port} | NODE_ENV: ${process.env.NODE_ENV}`);
});
