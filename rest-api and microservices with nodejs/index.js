
const express=require('express');
//const routes = require('./routes/api')
//set up express app
const app=express();

//for api
app.use('/api',require('./routes/api')); //it used the route /ninjas which are in api file
//here /api is used bcoz for multiple request we cant mention 
//listen for request
app.listen(process.env.port || 3000,function(){
    console.log('now listening for request');
})