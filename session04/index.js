const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "jcwd2504_hello_mysql",
});

db.connect((err) => {
  console.log(err);
});

const query = `SELECT * FROM students`;
db.query(query, (err, result) => {
  console.log("err:", err);
  console.log(result);
});

db.end();
