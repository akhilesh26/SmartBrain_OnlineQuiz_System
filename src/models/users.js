var connection = require('../config/config');

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})
