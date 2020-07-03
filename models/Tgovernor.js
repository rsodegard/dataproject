const mongoose = require('mongoose');

const TgovernorSchema = new mongoose.Schema({
  Ubi: {
    type: String,
    unique: true,
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
