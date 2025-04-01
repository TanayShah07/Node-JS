const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',     
    password: 'a1234#1234T',      
});

connection.connect(err => {
    if (err) throw err;
    console.log("Connected to MySQL!");

    connection.query("create database wpnode1", (err, result) => {
        if (err) throw err;
        console.log("Database created.");

        const useDB = "USE wpnode1";
        connection.query(useDB, (err) => {
            if (err) throw err;

            const createTable = `
                CREATE TABLE  student (
                    Rollno INT PRIMARY KEY AUTO_INCREMENT,
                    Student_name VARCHAR(255) NOT NULL,
                    Percentage FLOAT NOT NULL
                )
            `;
            connection.query(createTable, (err) => {
                if (err) throw err;
                console.log("Table 'student' created or already exists.");
                connection.end();
            });
        });
    });
});
