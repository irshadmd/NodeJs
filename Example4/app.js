var http=require('http');
var fs=require('fs');
http.createServer(function(request,response){
	response.setHeader('content-type','text/html');
	response.writeHead(200);
	fs.readFile('F:/Notes/Web Development/Node JS/Practice/Example4/file/index.html',function(err,data){	
		if(err){	
			response.write('<h1>404 Page Not Found</h1>');
			response.end();
		}else{
			response.write(data);
			response.end();
		}
	});
}).listen(9001);
