const express = require('express'),
	app = express(),
	template = require('./views/template')
	path = require('path'),
	seo = require('./views/content-configs/seo'),
	var helmet = require('helmet');

app.use(express.static(path.resolve(__dirname, '/www')));
// Serving static files
app.use(helmet());
app.use('/fonts', express.static(path.resolve(__dirname, '/fonts')));
app.use('/images', express.static(path.resolve(__dirname, '/images')));
app.use('/js', express.static(path.resolve(__dirname, '/js')));
app.use('/css', express.static(path.resolve(__dirname, '/css')));

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

// start the server
app.listen(6666);

const ssr = require('./views/server');

// server rendered home page
app.get('/', (req, res) => {
	const content = ssr();
	const response = template(seo, {initialLang: 'ru'}, content);
	res.setHeader('Cache-Control', 'assets, max-age=604800');
	res.send(response);
});
app.get('/en', (req, res) => {
	const content = ssr({initialLang: 'en'});
	const response = template(seo, {initialLang: 'en'}, content);
	res.setHeader('Cache-Control', 'assets, max-age=604800');
	res.send(response);
});
app.post('/order', (req, res) => {
	const {name, phone, message} = req.body;
	console.log(name, phone, message);
	res.send('success');
});

app.use(function(req, res){
	const notFound = require('./views/404.js');
	const response = notFound();
	res.setHeader('Cache-Control', 'assets, max-age=604800');
	res.send(response);
});