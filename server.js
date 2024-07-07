const express = require('express');
const mongoose = require('mongoose');
//const AutoIncrement = require('mongoose-')
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv').config();
const connectionString = process.env.MONGODB_URL
//const cardSchema = new mongoose.Schema({
  //id: { type: Number, required: true, unique: true},
//});
const Card = require('./models/CARD')

/*mongoose.connect(connectionString)
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

          app.get('/random',(req,res) =>{
            const randomNum = Math.floor(Math.random() * 2) + 1
            const card = Card.findOne({id:randomNum})
            res.render('views/index.ejs',{card: card})
          })
    })
    .catch(error => console.error(error)); */

 mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to Database'))
  .catch(error => console.error('Database connection error:', error));

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  try {
    const cards = await Card.find().lean();
    res.render('index', { cards });
  } catch (error) {
    console.error('Error fetching cards:', error);
    res.render('index', { cards: [], error: 'Failed to fetch cards' });
  }
});

app.get('/random', async (req, res) => {
  try {
    const count = await Card.countDocuments();
    const randomNum = Math.floor(Math.random() * count) + 1;
    const card = await Card.findOne({ id: randomNum }).lean();

    if (!card) {
      return res.render('index', { card: null, error: 'No card found' });
    }

    res.render('index', { card });
  } catch (error) {
    console.error('Error fetching random card:', error);
    res.render('index', { card: null, error: 'Failed to fetch random card' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
