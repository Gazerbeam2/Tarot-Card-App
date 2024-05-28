const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb+srv://jordanbryantsmith:Shadowfax1234!@cluster0.ebgyrrt.mongodb.net/',(err,client) =>{

})

app.listen(3000,function(){
    console.log('Bahaha your server is lestening on 3000')
})
app.set('view engine','ejss')

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

