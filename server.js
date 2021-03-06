var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');
var config = {
    user : 'chanduparmar',
    databse : 'chanduparmar',
    host : 'db.imad.hasura-app.io',
    port : '5432',
    password : 'db-chanduparmar-39499'
};
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
 var pool = new Pool(config);
app.get('/test-db', function(req,res){
   
    pool.query("SELECT * from test", function(err,result){
        if(err){
            
            res.status(500).send(err.toString());
        }else{
            res.send(JSON.stringify(result));
        }
    });
});

function hash (input, salt){
    var hashed = crypto.pbkdf2Sync(input,salt,10000,512,'sha512');
    return ['pbkdf2','10000',salt,hashed.toString('hex')].join('$');
}

app.get('/hash/:input', function(req,res){
    var hashString = hash(req.params.input,'this-is-random-value');
    res.send(hashString);
});

app.get('/artical-one', function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'artical-one.html'));
});

app.get('/artical-two', function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'artical-two.html'));
});

var counter = 0;

app.get('/counter', function(req,res){
     counter = counter + 1;
     res.send(counter.toString());
});

app.get('/artical-three', function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'artical-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js.', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
