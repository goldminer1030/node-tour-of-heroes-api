// models/hero.js

var mongoose = require('mongoose');

var heroSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

var Hero = mongoose.model('hero', heroSchema);
module.exports = Hero;
