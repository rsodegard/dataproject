const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

//ROUTES BELOW

const discover = require('./routes/discover');

//END

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.static(path.join(__dirname, 'public')));

//MOUNT ROUTER
app.use('/api/v1/discover', discover);
//END

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // close server and exit process (app fails)
  server.close(() => process.exit(1));
});
