
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

app.use(require("stylus").middleware({  //allows stylus
        src: __dirname + "/public",
        compress: true
}));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res){
	res.render('index', { 
		title: 'General Form', 
		size: ["small", "medium", "large", "super-large"],
		temp: "get wunderground api"
	});
});

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

app.post('/signup', function(req, res){

        setTimeout(function(){
                
        // if there is a bit of data called "email" in the response body
        // then return a JSON object with a property called "success"
        if(req.body.specific-name){
                console.log("specific name:", req.body.specificname);
                

                res.send({success : 'Success!', specificName: req.body.specificname})
        }
        else{ // If there isnt a bit of data called "email", return an error
                res.send({error : "Please provide provide balloon identification information."})
        }
        },4000);
})

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
