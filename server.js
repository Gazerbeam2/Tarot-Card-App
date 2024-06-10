const express = require('express');
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-')
const bodyParser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient
const connectionString = 'mongodb+srv://jordanbryantsmith:Shadowfax1234@cluster0.ebgyrrt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

MongoClient.connect(connectionString)
    .then(client => {
        console.log('Connected to Database');
        const db = client.db('Gazerbeam2')
        const quotesCollection = db.collection('Major-Arcana')
        app.set('view engine','ejs') //has to go before any other apps

        app.listen(3000,function(){
        console.log('Bahaha your server is listening on 3000')
})
        app.use(express.static('public'))

        app.get('/', (req, res) => {
            quotesCollection.find().toArray()
              .then(results => {
                console.log(results)
              })
              .catch(error => console.error(error))
              res.render('index.ejs',{})
            // ...
          })

          app.get('/',(req,res) =>{
            const randomNum = Math.floor(Math.random() * n) + 1 
            const card = Card.findOne({id:randomNum})
            res.render()
          })
    })
    .catch(error => console.error(err));

