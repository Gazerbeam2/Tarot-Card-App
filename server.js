const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient
const connectionString = 'mongodb+srv://jordanbryantsmith:Shadowfax1234@cluster0.ebgyrrt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

MongoClient.connect(connectionString)
    .then(client => {

        console.log('Connected to Database');
        const db = client.db('Gazerbeam2')

        app.listen(3000,function(){
        console.log('Bahaha your server is listening on 3000')
})
        app.set('view engine','ejss')

        app.get('/', (req,res) => {
         res.sendFile(__dirname + '/index.html')
         app.get('/', (req, res) => {
            db.collection('Major-Arcana')
              .find()
              .toArray()
              .then(results => {
                console.log(results)
              })
              .catch(error => console.error(error))
            // ...
          })
})


    })
    .catch(error => console.error(err));

