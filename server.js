const mongoose = require('mongoose');

/**
 * 
 * @param {String} connectionURL connectionURL
 */
const dbConnection= (connectionURL) => {
mongoose.connect(connectionURL);
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error: '));
  db.once('open', function () {
    console.log('DB Connected successfully');
  });
};

module.exports = {dbConnection};