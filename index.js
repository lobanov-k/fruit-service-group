const express = require('express');
const app = express();
const path = require('path');
const helmet = require('helmet');
const { sanitizeBody } = require('express-validator/filter');
const { check, oneOf, validationResult } = require('express-validator/check');

const template = require('./views/template');
const seo = require('./views/content-configs/seo');
const { createOrder } = require('./order/order-controller');

app.use(express.static(path.resolve(__dirname, '/www')));
// Serving static files
app.use(helmet());
app.use('/fonts', express.static(path.resolve(__dirname, '/fonts')));
app.use('/images', express.static(path.resolve(__dirname, '/images')));
app.use('/js', express.static(path.resolve(__dirname, '/js')));
app.use('/css', express.static(path.resolve(__dirname, '/css')));

app.use(express.json());
app.use(express.urlencoded());

// start the server
app.listen(8080);

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
app.post('/order',
	[
		sanitizeBody(['name', 'phone', 'message']).escape().trim(),
		oneOf([
			check('name', 'Name must be a string').exists({checkFalsy: true}).isString(),
			check('phone', 'Phone must be a string').exists({checkFalsy: true}).isString(),
			check('message', 'Message must be a string').exists({checkFalsy: true}).isString()
		])
	],
	(req, res, next) => {
		try {
			validationResult(req).throw();
			createOrder(req);
			res.status(200).json({});
		} catch (err) {
			res.status(422).json({"error": err.message});
		}
	}
);

app.use(function(req, res){
	const notFound = require('./views/404.js');
	const response = notFound();
	res.setHeader('Cache-Control', 'assets, max-age=604800');
	res.send(response);
});