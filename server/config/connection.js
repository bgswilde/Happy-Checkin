require('dotenv').config();
const mongoose = require('mongoose');

console.log(`\nmongo: ${process.env.MONGODB_URI}\n`)

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/happy-checkin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;