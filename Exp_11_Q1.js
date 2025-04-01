var http=require('http');
http.createServer(function(req,res){
    res.write('Hello Tanay!');
    res.end();
}).listen(4000);