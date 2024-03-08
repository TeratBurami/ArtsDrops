const express = require('express');
const cors=require('cors')
const app=express()

app.use(cors())

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'artsdrops'
});
 
connection.connect();

app.get("/art",(req,res)=>{
    connection.query('SELECT * from art', function (error, results, fields) {
        if (error) throw error;
        res.json(results)
      });
})

app.get("/only_4",(req,res)=>{
    connection.query('SELECT * from art limit 4', function (error, results, fields) {
        if (error) throw error;
        res.json(results)
      });
})

app.listen(3333,()=>{
    console.log("Running on port 3333");
})