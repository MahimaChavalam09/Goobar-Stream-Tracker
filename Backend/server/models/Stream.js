const mongoose = require('mongoose');

const streamSchema = new mongoose.Schema({
  name: String,
  viewers: Number,
});

module.exports = mongoose.model('Stream', streamSchema);

