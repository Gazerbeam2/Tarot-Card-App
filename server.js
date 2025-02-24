const express = require('express');
const mongoose = require('mongoose');
//const AutoIncrement = require('mongoose-')
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv').config();
const connectionString = process.env.MONGODB_URL;
const Card = require('./models/Card.js')

/*

          app.get('/random',(req,res) =>{
            const randomNum = Math.floor(Math.random() * 2) + 1
            const card = Card.findOne({id:randomNum})
            res.render('views/index.ejs',{card: card})
          })
    })
    .catch(error => console.error(error)); */

 mongoose.connect(connectionString, {})
  .then(() => console.log('Connected to Database'))
  .catch(error => console.error('Database connection error:', error));

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
  console.log("We're connected to the database!");
});

Card.find({})
  .then(documents => console.log('Found documents:', documents))
  .catch(err => console.error('Error querying documents:', err));


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/card', async (req, res) => {
  try {
    const card = await Card.find().lean();
    console.log(card);
    res.send({ card });
  } catch (err) {
    console.error('Error fetching cards:', err);
  }
});

app.get('/random', async (req, res) => {
  try {
    const count = await Card.countDocuments();
    //console.log(count);
    const randomNum = Math.floor(Math.random() * count) + 1;
    const card = await Card.findOne({ num_id: randomNum }).lean();
    console.log(card);



    if (!card) {
      return res.render('index', { card: null, error: 'No card found' });
    }

    res.render('index', { card : card });
    res.render('index', {message: test_text})
  } catch (error) {
    console.error('Error fetching random card:', error);
    res.render('index', { card: null, error: 'Failed to fetch random card' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`I love you ${PORT}`));
