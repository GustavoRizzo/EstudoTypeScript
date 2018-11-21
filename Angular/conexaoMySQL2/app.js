console.log('Rodando app.js!');

function createTableClientes(conn, res){
 
      const sql = "CREATE TABLE IF NOT EXISTS Clientes (\n"+
                  "ID int NOT NULL AUTO_INCREMENT,\n"+
                  "Nome varchar(150) NOT NULL,\n"+
                  "CPF char(11) NOT NULL,\n"+
                  "PRIMARY KEY (ID)\n"+
                  ");";
      
      conn.query(sql, (error, result) => {
          if(error) return console.log(error);
          console.log(result);
          res.send('Clientes table created...');
      });
}

function addRows(conn, res){
  const sql = "INSERT INTO Clientes(Nome,CPF) VALUES ?";
  const values = [
        ['teste1', '12345678901'],
        ['teste1', '09876543210'],
        ['teste3', '12312312399']
      ];
  conn.query(sql, [values], function (error, results, fields){
          if(error) return console.log(error);
          console.log('adicionou registros!');
          conn.end();//fecha a conexão
          res.send('Adicionou linhas');
      });
}



const express = require('express');
const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    host    : 'localhost',
    user    : 'gustavo',
    password    : '14840200',
    database    : 'nodemysql'
});

// Connect
db.connect((err)=> {
    if(err){
        console.log('Erro ao conectar ao banco.');
        throw err;        
    }
    console.log('MySQL conectado..');
});


const app = express();

// Create DB 
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE IF NOT EXISTS nodemysql';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Database created..');
    });
});

// Create Table Posts
app.get('/createpoststable', (req, res) => {
    let sql = 'CREATE TABLE IF NOT EXISTS posts (id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Post table created...');
    });
});

// Create Table Clientes
app.get('/createclientestable', (req, res) => {
    createTableClientes(db, res);
});

// Adicionando linhas a Clientes
app.get('/addlinhasclientes', (req, res) => {
    addRows(db, res);
});

app.listen('3000', () =>{
    console.log(' Servidor started on port 3000');
});



