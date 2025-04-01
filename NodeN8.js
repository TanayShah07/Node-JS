var mysql=require('mysql2');
var con=mysql.createConnection({
    host: "localhost", 
    user:"root",
    password:"a1234#1234T"
});
con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE tanaywp",function(err,result){
        if(err) throw err;
        console.log("Database created!");
    });
});