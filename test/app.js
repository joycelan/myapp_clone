
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3000);
app.set('ipaddr', process.env.OPENSHIFT_NODEJS_IP ||process.env.PORT);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/test.cgi', function(req, res){
	var k,ans = '';

	for(k in req.query) {
		ans= ans + k + '=' + req.query[k]+'---';
		console.log(k, req.query[k]);
	}
	res.send(ans+ "Hello Express Server");
	res.end();
});
http.createServer(app).listen(app.get('port'), app.get('ipaddr'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
