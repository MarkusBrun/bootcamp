const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/node-blogger');

// Have Mongoose use the ES6's built in promises
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', function(err) {
  console.error('There was an error: ' + err);
});
db.once('open', function() {
  console.log('Connected to node-blogger database!');
});
