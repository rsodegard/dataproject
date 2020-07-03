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

const importData = async () => {
  try {
    await Tgovernor.create(tgovernors);
    console.log('data imported...');
  } catch (err) {
    console.error(err);
  }
};

const deleteData = async () => {
  try {
    await Tgovernor.deleteMany();
    console.log('Data Destroyed...');
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}
