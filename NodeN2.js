var fs=require("fs");
fs.readFile('text.txt',function(err,data){
    if(err){
        return console.error(err);
    }
    console.log('Asynchronus Read: '+ data);
})