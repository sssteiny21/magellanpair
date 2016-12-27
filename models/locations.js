var mongoose = require('mongoose');

var locationSchema = mongoose.Schema({
  name       : String,
  climate    : String,
  country    : String,
  population : String,
});

module.exports = mongoose.model('locations', locationSchema);