const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  make: {
      type: String,
  },
  model: {
      type: String,
  },
  year: {
      type: Number,
  }
 
});

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cars: [carSchema]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
