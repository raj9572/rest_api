const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
   name:{
    type:String,
    required:true
   },
   price:{
    type:Number,
    required:[true,'price must be provided']
   },
   featured:{
    type:Boolean,
    default:false
   },
   rating:{
    type:Number,
    default:4.8
   },
   company:{
    type:String,
    enum:{
        values:["apple","samsung","dell","mi"],
        message:`{value} is not supported`
        }
   },
   createdAt:{
    type:Date,
    default:Date.now
   },
});

module.exports = mongoose.model("product",ProductSchema)