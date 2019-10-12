var http=require('http');
var fs=require('fs');
var fileName="";

http.createServer(function(request,response){

	console.log(request.url);
	if(request.url=='/'||request.url=='/index.html'){
		fileName="/index.html";
	}else if(request.url=='/style.css'){
		fileName=request.url;
	}else if(request.url=='/about.html'){
		fileName=request.url;
	}else if(request.url=='/contact.html'){
		fileName=request.url;
	}else if (request.url=='/help.html'){
		fileName=request.url;
	}else if(request.url=='/script.js'){
		fileName=request.url;
	}

	fs.readFile(__dirname+"/public"+fileName,function(err,data){
		if(err){
			response.writeHead(404);
			response.write("<h1>404 Page not Found</h1>");
			response.end();
		}else{
			if(request.url=='/style.css'){
				response.writeHead(200,{'content-type':'text/css'});
				response.write(data);
				response.end();	
			}else if(request.url=='/script.js'){
				response.writeHead(200,{'content-type':'text/script'});
				response.write(data);
				response.end();
			}
			else{
				response.writeHead(200,{'content-type':'text/html'});
				response.write(data);
				response.end();	
			}
			
		}
	})
}).listen(9001);