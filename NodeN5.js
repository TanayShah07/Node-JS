const http=require('http');
const fs=require('fs');
http.createServer((req,res)=>{
    fs.readFile('hello.html',(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'});
        type
        res.write(data);
        res.end();
    });
}).listen(8080, ()=>console.log('Server listening at port ${port}'));