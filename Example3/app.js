var http=require('http');
http.createServer(function(request,response){
	response.writeHead(200);
	response.write("<h1>Welcome</h1>");
	var url=request.url;
	if (url=='/') {
		response.write("<h1>I am Home Page</h1>");
	}else if(url=='/services'){
		response.write("<h1>You are at services page</h1>");
	}else if(url=='/services/offers'){
		response.write("<h1>You are at offers section of services</h1>");
	}else{
		response.write("<h1>404 Page Not Found</h1>");
	}
	response.end();
}).listen(9001);