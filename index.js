const express = require('express'),
	app = express(),
	template = require('./views/template')
	path = require('path'),
	seo = require('./views/content-configs/seo');

// Serving static files
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.use('/media', express.static(path.resolve(__dirname, 'media')));

// hide powered by express
app.disable('x-powered-by');
// start the server
app.listen(process.env.PORT || 3000);

const ssr = require('./views/server');

// server rendered home page
app.get('/', (req, res) => {
	const content = ssr();
	const response = template(seo, {}, content);
	res.setHeader('Cache-Control', 'assets, max-age=604800');
	res.send(response);
});

app.get('/client', (req, res) => {
	let response = template('Client Side Rendered page');
	res.setHeader('Cache-Control', 'assets, max-age=604800');
	res.send(response);
});