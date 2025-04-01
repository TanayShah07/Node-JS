var fs=require('fs');
fs.rename('input.txt','randtext.txt',function(err){
    if(err) throw err;
    console.log('File renamed!')
})