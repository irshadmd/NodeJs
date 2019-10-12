var http=require("http");
http.createServer( function(request,response) {
response.writeHead(200);
response.write("Thank You, Almighty God for Everything");
response.end();
} ).listen(9001);