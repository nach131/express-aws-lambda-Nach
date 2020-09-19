// const Articles = require('./model/Articles')
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({extended:false}))

const uri =`mongodb+srv://nacho:klingon@cluster0.ldmkf.mongodb.net/nasaDB?retryWrites=true&w=majority`

mongoose.connect(uri, {
   useUnifiedTopology: true,
   useNewUrlParser: true
 })

 const connection = mongoose.connection;
 connection.once('open', () => console.log("MongoDb conectado"));
 

 const fotoRouter = require('./router/fotos');
 app.use('/fotos', fotoRouter);
 


module.exports = app;