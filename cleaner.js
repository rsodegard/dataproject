const fs = require('fs');
const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const Tgovernor = require('./models/Tgovernor');

// mongoose connect
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// read json files
const tgovernors = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/TestData.json`, 'utf-8')
);

const largefile = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/TestData.json`, 'utf-8')
);

//Successfully adds { _id: 2384723872 }
const cleanData = async (array) => {
  for (i = 0; i < array.length; i++) {
    let x = array[i];
    try {
      x._id = Date.now() + i;
      // write to a json file first, to see if it works, before throwing in DB
      var successItem = JSON.stringify(x);
      fs.appendFile(
        `${__dirname}/_data/largefileCleaned.json`,
        `,${successItem}`,
        (err) => {
          if (err) throw err;
          console.log(error);
        }
      );
      // await Tgovernor.create(array[i]);
      console.log(successItem);
    } catch (error) {
      fs.appendFile(
        'errorLog.txt',
        `\nError ${error} in sequence ${i}`,
        (err) => {
          if (err) throw err;
          console.log('Error logged in errorLog.txt');
        }
      );
      console.log(`Error ${error} in sequence ${i}`);
      continue;
    }
  }
};

cleanData(largefile);

//Need to If statement to add [ and ] for last and first entries as well. Need to learn how to continue iteriation with error in any given entry.

//I need to use a streaming parser, this allows me to put a small amount of data at a time into memory.

//Need to control for (1) same UBI, (2) random TC^Key index, (3) if there's an error skip and go to next, (4) log errors that are skipped, (5) other errors with the data such as missing names etc.

//On front, you will need to figure out what is going on with the state onthe search, how to limit results.

//You'll need to use a parser, and you need to figure out a way to write into file before heap crash.

//What was interesting is that when you put the whole file through the cleaner, it consol logged a shit ton fo data, and created governingPersonsCleaned, but it did not write the data to it.
