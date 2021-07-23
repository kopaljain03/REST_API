const mongoose=require('mongoose');
const bookSchema= new mongoose.Schema({
name:{
    type: String,
    required: true
},
number:{
    type: Number
}
})

module.exports=mongoose.model('hehe',bookSchema)