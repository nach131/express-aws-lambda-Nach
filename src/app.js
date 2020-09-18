// const Articles = require('./model/Articles')
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({extended:false}))

const uri =`mongodb+srv://nacho:klingon@cluster0.ldmkf.mongodb.net/mern_blog?retryWrites=true&w=majority`

mongoose.connect(uri, {
   useUnifiedTopology: true,
   useNewUrlParser: true
 })

 const connection = mongoose.connection;
 connection.once('open', () => console.log("MongoDb conectado"));
 

 const articleRouter = require('./router/articles');
 app.use('/articles', articleRouter);
 


module.exports = app;