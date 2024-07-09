const Card = require("./Card")
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const connectionString = process.env.MONGODB_URL;

mongoose.connect(connectionString, {})
.then(() => console.log('Connected to Database'))
.catch(error => console.error('Database connection error:', error));


Card.exists({name:"The Fool"}).then(result => { 
    console.log(result) 
})