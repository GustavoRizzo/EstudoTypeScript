const mysql     = require('mysql');

// Criando conexão
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'gustavo',
    password : '14840200'
});

// Abrindo conexão
connection.connect(function(err){
  if(err) return console.log(err);
  console.log('conectou!');
})

// Create DB
/*function createDB(conn){

    const sql = 'CREATE DATABASE nodemysql';
    const conn.query(sql, function (error, result, fields){

    })
}
*/
