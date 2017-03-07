require('babel-register')({
	presets: ['react']
});

var express = require('express');
var app = express();

app.use(express.static('public'));

app.use(require('./routes/index.jsx'));


app.listen(process.env.PORT, function(){
	console.log('http://localhost:')
})
