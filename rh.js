require('babel-register')({
	presets: ['react']
});
var imPORT = require('./config-example/config-example');

var express = require('express');
var app = express();

app.use(express.static('public'));

app.use(require('./routes/index.jsx'));

const PORT = process.env.PORT || imPORT.PORT;

app.listen(PORT, function(){
	console.log('http://localhost:')
})
