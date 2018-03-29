var http = require("http");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');
var routes = require('./controllers/index');
var users = require('./controllers/users');
var quiz = require('./controllers/quiz');
var mysql = require('mysql');


var connection = mysql.createConnection({
              host     : 'localhost',
              user     : 'root',
              password : 'akhilesh26',
              database : 'quiz'
            });

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected to the database')
})

global.db = connection;

// set view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


// set path of static files
app.use(express.static(path.join(__dirname, 'public')));

//start body-parser configuration
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: false
}));
//end body-parser configuration



// set session time in cookies
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))



//create app server
var server = app.listen(3000,  "127.0.0.1", function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});


app.get('/', routes.index);//call for main index page
app.get('/login', routes.index);//call for login page
app.get('/signup', users.signup);//call for signup page
app.post('/login', users.login);//call for login post
app.post('/signup', users.signup);//call for signup post
app.get('/home/dashboard', users.dashboard);//call for dashboard page after login
app.get('/home/logout', users.logout);//call for logout
app.get('/home/profile', users.profile);//to render users profile
app.get('/user/createQuiz', users.createQuiz)// to render createQuiz page
app.post('/user/createQuiz', quiz.createQuiz);// call for createquiz post
