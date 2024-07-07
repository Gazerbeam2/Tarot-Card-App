const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  num_id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },

});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;