var mysql=require("mysql2");
var con=mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "a1234#1234T",
    database:"tanaywp"
});
con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    var sql="CREATE TABLE customers(name VARCHAR(255),address VARCHAR(255))";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log("Table Created!");
});
});