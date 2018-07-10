/*
require('babel-register')({
	presets: ['env']
});
*/

//const imPORT = require('./config/config');
import PORT from './config/config';
const imPORT = PORT;

//const express = require('express');
import express from 'express';
const app = express();
app.use(express.static('public'));

import routes from './routes/index.jsx';
app.use(routes);

let port = process.env.PORT || imPORT.PORT;

app.listen(port, function(){
	let test= 'testing';
	console.log(test + ' http://localhost:' + " " + port)
})
