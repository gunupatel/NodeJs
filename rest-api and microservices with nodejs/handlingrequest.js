const express=require('express');

//set up express app
const app=express();

app.get('/api',function(req,res){
    console.log('GET request') //express responded to browser ,send to server and server respond to client
    res.end(); // stop snipping
    res.send({name:'gunjan'});
});

//listen for request
app.listen(process.env.port || 4000,function(){
    console.log('now listening for request');
})