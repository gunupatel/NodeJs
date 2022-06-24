var express = require('express');

var app = express();

app.get('/profile/:id', function(req,res){
    res.send('you requested to see profile with id of' +req.params.id);
});
app.listen(3000);
