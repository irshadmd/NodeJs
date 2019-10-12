var express=require('express');
app=express();
app.use(express.static('public'));
app.get("/",function(req,res){
	res.send(__dirname+"/public/index.html");
})
app.get("/index.html",function(req,res){
	res.sendFile(__dirname+"/public/index.html");
})
app.listen(9001,function(){
	console.log("Server running");
})