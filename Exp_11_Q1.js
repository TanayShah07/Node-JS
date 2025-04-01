var http=require('http');
http.createServer(function(req,res){
    res.write('Hello Student!');
    res.end();
}).listen(2000);