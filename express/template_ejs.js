const express=require('express');
const app=express();
app.set('view engine', 'ejs');
app.get("/profile/:name",function(req,res){
    //res.sendFile(__dirname+'/index.html')
    console.warn(req.params.name)
    res.render('Profile',{name:req.params.name})
})

app.listen(3000);