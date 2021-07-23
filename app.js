const express=require('express');
const app=express();
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/RandDB',{useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.urlencoded())
app.use(express.json())

const booksRoute=require('./routes/books');
app.use('/books',booksRoute);


app.listen(80,()=>{
    console.log('listening on port');
})