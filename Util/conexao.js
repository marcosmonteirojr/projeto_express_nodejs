const mysql = require('mysql');
 const conexao = mysql.createConnection({
    host:"localhost",
    port:3307,
    user: "root",
    password: "1212",
    database: "formula2",
 });

 module.exports = conexao;
