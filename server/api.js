const express = require('express');
const cors = require('cors')
require('dotenv').config()
const app = express()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');

app.use(cors())

var mysql = require('mysql2');
var connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

connection.connect();


//return account
app.get('/account', (req, res) => {
  let sql='SELECT * FROM Account';
  let id=req.query.id;
  let search=req.query.search;
  
  id? sql+=` WHERE account_id LIKE \'${id}\'`:sql+=''
  search? sql+=
  ` WHERE account_id LIKE \'%${search}%\'
  OR username LIKE \'%${search}%\'
  OR phone_no LIKE \'%${search}%\'
  OR email LIKE \'%${search}%\'
  `:sql+='';

  connection.query(sql,
  function (err, results, fields) {
    if (err) throw err;
    res.json(results);
    })
})

//return payment log
app.get('/payment_log', (req, res) => {
  let sql='SELECT * FROM Buy JOIN Art ON Buy.art_id = Art.art_id JOIN Account ON Buy.account_id = Account.account_id';
  let search=req.query.search;
  search? sql+=` 
  WHERE paid_id LIKE \'%${search}%\'
  OR art_name LIKE \'%${search}%\'
  OR Art.art_id LIKE \'%${search}%\'
  OR Account.account_id LIKE \'%${search}%\'
  OR Art.price<=\'${search}\'
  `:sql+=''
  connection.query(sql, function (err, results, fields) {
    if (err) throw err;
    res.json(results);
  })
})

//return artist
app.get("/artist", (req, res) => {
  let sql='SELECT * FROM Artist';
  let search=req.query.search;
  search? sql+=` WHERE Artist.artist_name LIKE \'%${search}%\'`:sql+=''
  connection.query(sql, function (error, results, fields) {
    if (error) throw error;
    res.json(results)
  });
})

//return art join with artist can be searched by art_name, price, type
app.get("/art", (req, res) => {
  var params = [];
  var sql = 'SELECT * FROM Art JOIN Artist ON Art.artist_id=Artist.artist_id';
  var type = req.query.type;
  var name = req.query.name;
  var price = req.query.price;
  var sort = req.query.sort;
  var search=req.query.search;

  search? sql+=` 
  WHERE art_name LIKE \'%${search}%\'
  OR type LIKE \'%${search}%\'
  OR price<='${search}'
  OR art_id LIKE \'%${search}%\'
  OR artist_name LIKE \'%${search}%\'
  `:sql+=''

  if (name || type || price) {
    sql += ' WHERE'
  }
  if (name) {
    sql += ' art_name LIKE ?';
    params.push('%' + name + '%');
  }
  if (type) {
    if (name) {
      sql += ' AND';
    }
    sql += ' type LIKE ?'
    params.push(type);
  }
  if (price) {
    if (name || type) {
      sql += ' AND';
    }
    sql += ' price <= ?';
    params.push(price);
  }

  if (sort) {
    sort = sort.split(' ');
    if (sort != 'error') {
      sql += ` ORDER BY ${sort[0]} ${sort[1]}`
    }
  }

  connection.execute(sql, params, function (error, results, fields) {
    if (error) throw error;
    res.json(results)
  });
})

//return 4 arts
app.get("/only_4", (req, res) => {
  connection.query('SELECT * FROM Art JOIN Artist ON Art.artist_id=Artist.artist_id limit 4', function (error, results, fields) {
    if (error) throw error;
    res.json(results)
  });
})


//return art toy for art toy page
app.get("/art_toy", (req, res) => {
  connection.query('SELECT * FROM Art WHERE Art.type LIKE "Art toy" ', function (error, results, fields) {
    if (error) throw error;
    res.json(results)
  });
})

//return 4 artists
app.get('/pop_artist', (req, res) => {
  connection.query('SELECT * FROM Artist limit 4', function (error, results, fields) {
    if (error) throw error;
    res.json(results)
  })
})

//signup or add new user account
app.post('/account', jsonParser, function (req, res, next) {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    connection.execute(
      'INSERT INTO Account (account_id,username,password,email,DOB,phone_no,user_role) VALUES (?, ?, ?, ?, ?, ?,?)',
      ['U' + Math.floor(Math.random() * 1000) + 1, req.body.username, hash, req.body.email, req.body.DOB, req.body.tel, req.body.user_role],
      function (err, results, fields) {
        if (err) {
          res.json({ status: 'error', msg: err.message })
          return
        }
        res.json({ status: 'success' })
      }
    )
  });
})

//check email and encrypted password of logging in user, then generate token if successful
app.post('/login', jsonParser, function (req, res, next) {
  connection.execute(
    'SELECT * FROM Account WHERE email=?',
    [req.body.email],
    function (err, users, fields) {
      if (err) {
        res.json({ status: 'error', msg: err.message })
        return
      }
      else if (users.length == 0) {
        res.json({ status: "error", msg: "No user found" })
        return
      }
      bcrypt.compare(req.body.password, users[0].password, function (err, isLogin) {
        if (isLogin) {
          var TOKEN = jwt.sign({ id: users[0].account_id , user_role:users[0].user_role, username:users[0].username}, process.env.SECRET, { expiresIn: '4h' });
          res.json({ status: 'success', msg: "Login success", TOKEN })
        }
        else {
          res.json({ status: 'incorrect', msg: "Incorrect" })
        }
      });
    }
  )
})

//use to authorize the token of user
app.post('/auth', jsonParser, function (req, res, next) {
  try {
    const TOKEN = req.headers.authorization.split(' ')[1]
    var decoded = jwt.verify(TOKEN, process.env.SECRET);
    res.json({status:'success', data:decoded })
  }
  catch(err){
    res.json({status:'error',msg:err.message})
  }
})

//add new art
app.post('/art', jsonParser, function (req, res, next) {
  connection.execute(
    'INSERT INTO Art (art_id,art_name,type,price,descript,picture,artist_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
    ['AR' + Math.floor(Math.random() * 100) + 1, req.body.art_name, req.body.type, req.body.price, req.body.descript, req.body.picture, req.body.artist_id],
    function (err, results, fields) {
      if (err) {
        res.json({ status: 'error', msg: err.message })
        return
      }
      res.json({ status: 'success' })
    }
  )
})

//edit the art information
app.put('/art', jsonParser, function (req, res, next) {
  connection.execute(
    'UPDATE Art SET art_name=?,type=?,price=?,descript=?,picture=?,artist_id=? WHERE art_id=?',
    [req.body.art_name, req.body.type, req.body.price, req.body.descript, req.body.picture, req.body.artist_id, req.body.art_id],
    function (err, results, fields) {
      if (err) {
        res.json({ status: 'error', msg: err.message })
        return
      }
      res.json({ status: 'success' })
    }
  )
})

//edit the account information
app.put('/account', jsonParser, function (req, res, next) {
  connection.execute(
    'UPDATE Account SET username=?,email=?,DOB=?,phone_no=?,user_role=? WHERE account_id=?',
    [req.body.username, req.body.email, req.body.DOB, req.body.phone_no, req.body.user_role, req.body.account_id],
    function (err, results, fields) {
      if (err) {
        res.json({ status: 'error', msg: err.message })
        return
      }
      res.json({ status: 'success' })
    }
  )
})

//delete the art
app.delete('/art', jsonParser, function (req, res, next) {
  connection.execute(
    'DELETE FROM Art WHERE art_id=?',
    [req.body.art_id],
    function (err, results, fields) {
      if (err) {
        res.json({ status: 'error', msg: err.message })
        return
      }
      res.json({ status: 'success' })
    }
  )
})

//delete the account
app.delete('/account', jsonParser, function (req, res, next) {
  connection.execute(
    'DELETE FROM Account WHERE account_id=?',
    [req.body.account_id],
    function (err, results, fields) {
      if (err) {
        res.json({ status: 'error', msg: err.message })
        return
      }
      res.json({ status: 'success' })
    }
  )
})

//set listen
app.listen(process.env.PORT, () => {
  console.log(`Running on port ${process.env.PORT}`);
})