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

app.post('/signup',jsonParser,function(req,res,next){
  connection.execute(
    'INSERT INTO User (account_id,username,password,email,DOB,phone_no) VALUES (?, ?, ?, ?, ?, ?)',
    ['U'+Math.floor(Math.random() * 1000) + 1,req.body.username,req.body.password,req.body.email,req.body.DOB,req.body.tel],
    function(err,results,fields){
      if(err){
        res.json({status:'error',msg: err.message})
        return
      }
      res.json({status:'success'})
    }
  )
})

app.post('/login',jsonParser,function(req,res,next){
  connection.execute(
    'SELECT * FROM User WHERE email=?',
    [req.body.email],
    function(err,users,fields){
      if(err){
        res.json({status:'error',msg: err.message})
        return
      }
      else if(users.length==0){
        res.json({status:"error",msg:"No user found"})
        console.log('no user')
        return
      }
      else if(req.body.password==users[0].password){
        res.json({status:'success',msg:"Login success"})
        console.log('success')
      }
      else{
        res.json({status:'error',msg:"Incorrect"})
        console.log('failed')
      }
    }
  )
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
  var params=[];
  var sql='SELECT * FROM Art';
  var type=req.query.type;
  var search=req.query.search;
  var price=req.query.price;
  var sortedName=req.query.sortName;
  var sortedPrice=req.query.sortPrice;

  if(search || type || price){
    sql+=' WHERE'
  }
  if(search){
    sql+=' art_name LIKE ?';
    params.push('%'+search+'%');
  }
  if(type){
    if(search){
      sql+=' AND';
    }
    sql+=' type LIKE ?'
    params.push(type);
  }
  if(price){
    if(search || type){
      sql+=' AND';
    }
    sql+=' price <= ?';
    params.push(price);
  }

  

  connection.execute(sql,params, function (error, results, fields) {
      
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



app.get("/art_toy",(req,res)=>{
  connection.query('SELECT * FROM Art WHERE Art.type LIKE "Art toy" ', function (error, results, fields) {
      if (error) throw error;
      res.json(results)
    });
})


app.get('/pop_artist',(req,res)=>{
  connection.query('SELECT * FROM Artist limit 4', function (error,results,fields){
    if (error) throw error;
    res.json(results)
  })
})

app.post('/addProduct',jsonParser,function(req,res,next){
  connection.execute(
    'INSERT INTO Art (art_id,art_name,type,price,descript,picture,artist_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
    ['AR'+Math.floor(Math.random() * 100) + 1,req.body.art_name,req.body.type,req.body.price,req.body.descript,req.body.picture,req.body.artist_id],
    function(err,results,fields){
      if(err){
        res.json({status:'error',msg: err.message})
        return
      }
      res.json({status:'success'})
    }
  )
})

app.post('/editProduct',jsonParser,function(req,res,next){
  connection.execute(
    'UPDATE Art SET art_name=?,type=?,price=?,descript=?,picture=?,artist_id=? WHERE art_id=?',
    [req.body.art_name,req.body.type,req.body.price,req.body.descript,req.body.picture,req.body.artist_id,req.body.art_id],
    function(err,results,fields){
      if(err){
        res.json({status:'error',msg: err.message})
        return
      }
      res.json({status:'success'})
    }
  )
})

app.delete('/delProduct',jsonParser,function(req,res,next){
  connection.execute(
    'DELETE FROM Art WHERE art_id=?',
    [req.body.art_id],
    function(err,results,fields){
      if(err){
        res.json({status:'error',msg: err.message})
        return
      }
      res.json({status:'success'})
    }
  )
})

app.listen(3333,()=>{
    console.log("Running on port 3333");
})