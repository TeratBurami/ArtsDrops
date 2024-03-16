const express = require('express');
const cors=require('cors')
const app=express()
const bodyParser=require('body-parser')
const jsonParser=bodyParser.json()

app.use(cors())

var mysql      = require('mysql2');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'artsdrops'
});
 
connection.connect();

app.post('/register',jsonParser,function(req,res,next){
  connection.execute(
    'INSERT INTO User (username,password,email,DOB,phone_no) VALUES (?, ?, ?, ?, ?)',
    [req.body.username,req.body.password,req.body.email,req.body.DOB,req.body.tel],
    function(err,results,fields){
      if(err){
        res.json({status:'error',msg: err.message})
        return
      }
      res.json({status:'success'})
    }
  )
  // var email=req.body.email
  // res.json({email})

})

app.get('/account',(req, res) => {
  connection.query('SELECT a.*, ad.Rolee FROM Account a LEFT JOIN Admin ad ON a.account_id = ad.account_id LEFT JOIN User u on u.account_id = a.account_id',
  function(err, results, fields){
    if(err) throw err;
    res.json(results);
  })
})

app.get('/payment_log', (req, res) => {
  connection.query('SELECT * FROM Buy JOIN Art ON Buy.art_id = Art.art_id JOIN Account ON Buy.account_id = Account.account_id', function(err, results, fields){
    if(err) throw err;
    res.json(results);
  })
})

app.get('/users',(req,res)=>{
  connection.query('SELECT * FROM User',function(err,results,fields){
    if(err) throw err;
    res.json(results)
  })
})

app.get("/art_artist",(req,res)=>{
    connection.query('SELECT * FROM Art JOIN Artist ON Art.artist_id=Artist.artist_id', function (error, results, fields) {
        if (error) throw error;
        res.json(results)
      });
})

app.get("/art",(req,res)=>{
  connection.query('SELECT * FROM Art', function (error, results, fields) {
      if (error) throw error;
      res.json(results)
    });
})

app.get("/only_4",(req,res)=>{
    connection.query('SELECT * FROM Art limit 4', function (error, results, fields) {
        if (error) throw error;
        res.json(results)
      });
})

app.get('/pop_artist',(req,res)=>{
  connection.query('SELECT * FROM Artist limit 3', function (error,results,fields){
    if (error) throw error;
    res.json(results)
  })
})

app.listen(3333,()=>{
    console.log("Running on port 3333");
})