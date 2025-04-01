var fs=require('fs');
fs.appendFile('text.txt','Hello World!',function(err){
    if(err){
        console.log(err);
    }    
    else{
        console.log('Append operation complete.');
    }
})