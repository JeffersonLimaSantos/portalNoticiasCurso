var http = require('http');

var server = http.createServer(function (req, res) {
	
	if(req.url == "/tecnologia")
	{
		res.end("<html><body>Portal de Tecnologia</body></html>");
	}
	else if(req.url == "/moda")
	{
		res.end("<html><body>Portal de Moda</body></html>");
	}
	else if(req.url == "/beleza")
	{
		res.end("<html><body>Portal de Beleza</body></html>");
	}
	else
	{
		res.end("<html><body>Portal de Notícias</body></html>");
	}

});

server.listen(3000);