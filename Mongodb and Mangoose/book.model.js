var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var BookSchema=new Schema({
    title:String,
    published:{
        type:Date,
        default:Date.now
    },

    keywords:Array,
    published:Boolean,
    author:{
        type:Schema.ObjectId,
    
        ref:User
    },
    // Embedded sub-doc
    detail:{
        modelNumber:Number,
        hardcover:Boolean,
        reviews:Number,
        rank:Number
    }
})

module.experts=mongoose.model('Book', BookSchema);