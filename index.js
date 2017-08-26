var express = require('express')
var app = express()
const config = require("./config/database");
var mongoose = require('mongoose');
mongoose.connect(config.uri,(err)=>{
  if(err){
    console.log(err);
  }
  else {
    console.log("connected");
  }
});
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world');
});

app.listen(3000);
