const fs = require('fs');
const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

// const Tgovernor = require('./models/Tgovernor');

// // mongoose connect
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   });

// read json files
const tgovernors = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/TestData.json`, 'utf-8')
);

//Successfully adds { _id: Hello }
const cleanData = (array) => {
  for (i = 0; i < array.length; i++) {
    let x = array[i];
    x._id = 'Hello';
    console.log(x);
  }
};

cleanData(tgovernors);

//Need to control for (1) same UBI, (2) random TC^Key index, (3) if there's an error skip and go to next, (4) log errors that are skipped, (5) other errors with the data such as missing names etc.

//On front, you will need to figure out what is going on with the state onthe search, how to limit results.
