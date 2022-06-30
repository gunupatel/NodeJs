//here will create api for all file
const express=require('express');
const router=express.Router();

//get a list of ninjas from
router.get('/ninjas',function(req,res){
    res.send({type:'GET'});
});

//add new ninjas in the db
router.post('/ninjas',function(req,res){
    res.send({type:'POST'});
});

router.put('/ninjas/:id',function(req,res){
    res.send({type:'PUT'});
});

router.delete('/ninjas/:id',function(req,res){
    res.send({type:'DELETE'});
});


module.exports = router;

