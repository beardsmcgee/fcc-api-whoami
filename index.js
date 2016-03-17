var express = require('express');

var app = express();

app.get('/', function(req ,res){
	var ip = req.connection.remoteAddress;
	var language = req.headers['accept-language'];
	var software = req.headers['user-agent'];
	res.json({ip: ip, language: language, software: software})
});

app.listen(process.env.PORT || 8000);