var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var signups = new Schema({
  key          : String,
  calls        : String,
  limit        : String
});

module.exports = mongoose.model('users', signups);