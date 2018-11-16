const express = require('express'),
	app = express(),
	template = require('./views/template')
	path = require('path'),
	seo = require('./views/content-configs/seo');

// Serving static files
app.use('/fonts', express.static(path.resolve(__dirname, 'dist/fonts')));
app.use('/images', express.static(path.resolve(__dirname, 'dist/images')));
app.use('/js', express.static(path.resolve(__dirname, 'dist/js')));
app.use('/css', express.static(path.resolve(__dirname, 'dist/css')));

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