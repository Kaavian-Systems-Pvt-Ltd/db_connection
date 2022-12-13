const mongoose = require('mongoose');

/**
 * 
 * @param {String} get connectionURL
 */
const dbConnection= (get) => {
mongoose.connect(get);
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error: '));
  db.once('open', function () {
    console.log('DB Connected successfully');
  });
};

module.exports = {dbConnection};