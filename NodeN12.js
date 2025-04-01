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
    var sql="ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log("Table Altered!");
});
});