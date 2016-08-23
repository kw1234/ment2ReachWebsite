var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();

//for form post handling
var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));


console.log("in index.js");

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('pages/index')
});

app.get('/loginpage', function(request, response) {
    response.render('pages/loginpage')
});


app.get('/dashboard', function(request, response) {
    response.render('pages/dashboard')
});


app.get('/cool', function(request, response) {
    response.send(cool());
});

app.post('/dashboard', function (req, res) {
	var email = req.body.email;
	var password = req.body.psw;
	console.log("dashboard post email");
	console.log(email);
	console.log("dashboard post password");
	console.log(password);
	app.get('/loginpage', function(req, res, next) {
  		res.json({ message: 'Hello World' });
	});
});



app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

