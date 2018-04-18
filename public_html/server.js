var express = require('express');
var app = express();

var execPHP = require('./execphp.js')();

execPHP.phpFolder = '~/Projects/test/php/help.cofc.edu/public_html';

app.use('*.php',function(request,response,next) {
	execPHP.parseFile(request.originalUrl,function(phpResult) {
		response.write(phpResult);
		response.end();
	});
});

app.listen(3001, function () {
	console.log('Node server listening on port 3001!');
});
