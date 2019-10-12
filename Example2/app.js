var http=require('http');
var file=require('module1');
http.createServer(function(request,response){
	response.setHeader('content-type','text/html');
	response.writeHead(200);
	response.write('<h1>Hellooo</h1>');
	file();
	response.end();
}).listen(9001);