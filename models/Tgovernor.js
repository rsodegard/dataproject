const mongoose = require('mongoose');

const TgovernorSchema = new mongoose.Schema({
  _id: {
    type: String,
  },
  Ubi: {
    type: String,
    unique: false,
  },
  Title: {
    type: String,
  },
  FirstName: {
    type: String,
  },
  LastName: {
    type: String,
  },
  MiddleName: {
    type: String,
  },
  Address: {
    type: String,
  },
  City: {
    type: String,
  },
  State: {
    type: String,
  },
  Zip: {
    type: String,
  },
});

module.exports = mongoose.model('Tgovernor', TgovernorSchema);
