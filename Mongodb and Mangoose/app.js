var express=require('express');
var app=express();
var bodyparser=require('body-parser');
const { request } = require('http');

var mongoose = request('mongoose');
var Book=require('./Book.model');

var db='mongodb://localhost/example';
 
mongoose.connect(db);

app.get('/',function(req,res){
    res.send('Hello');
});
var port=8080;
app.listen(port,function(){
    console.log('app listening on port'+port);
});