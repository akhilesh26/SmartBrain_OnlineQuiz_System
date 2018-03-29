var mysql = require('mysql');

exports.connection = mysql.createConnection({
  host     : 'localhost', //mysql database host name
  user     : 'root', //mysql database user name
  password : 'Add your password', //mysql database password
  database : 'quiz' //mysql database name
});
