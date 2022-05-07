const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://gauravkharayat:Gaurav99@cluster0.xxvry.mongodb.net/test'

mongoose.connect(mongoURL ,{useUnifiedTopology : true ,useNewUrlParser:true})

var connection = mongoose.connection

connection.on('error',()=>{
    console.log('Mongo DB Connection failed')
})

connection.on('connected',()=>{
    console.log('Mongo DB Connection Successfull')
})



module.exports = mongoose