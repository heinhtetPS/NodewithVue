const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Items
var Summoner = new Schema({
  name: {
    type: String
  },
  id: {
    type: Number
  }
},{
    collection: 'summoners'
});

module.exports = mongoose.model('Summoner', Summoner);
