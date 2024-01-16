const express = require('express');
const app = express();
const PORT = 5000;
const mongoose = require('mongoose');
const cors = require("cors");
app.use(cors());
require('./models/models');
app.use(express.json());
app.use(require('./routes/auth'));
mongoose.connect('mongodb+srv://admin:Wj8G7wX7vqSUvua7@like-minded.ervo79l.mongodb.net/mydb');

mongoose.connection.on("connected", ()=>{
    console.log("successfully connected to mongo");
})
mongoose.connection.on("error", ()=>{
    console.log("Not connected to mongo");
})


app.listen(PORT, ()=>{
  console.log("server is running on " +PORT);
});