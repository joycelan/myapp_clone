
/**
 * Module dependencies.
 */

var express = require('express')
, routes = require('./routes')
, user = require('./routes/user')
, contact = require('./routes/contact')
, http = require('http')
, writer = require('./routes/write.js')
, path = require('path');

var app = express();
var lang = 1; //1=chinese ; 2=engilsh
// all environments
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080);
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
app.get('/contactus', function(req, res){
	if(lang == 2) contact.contactus_en(req, res);
	else contact.contactus(req, res);

})

app.get('/change_lang.cgi',function(req, res){
	if(req.query['lang'] == 2){
		lang = 2;
	}
	else  lang = 1;

	res.send(lang);
	res.end();
})

app.post('/honpac.cgi', function(req, res){
	var result='';
	var k;
	console.log(req.body);
	k= JSON.stringify( req.body);
	var date = new Date();
	var time = date.getTime();
	writer.write( './public/message/'+req.body.title+' - '+ time +'.txt', k );
	res.end();
});

app.get('/list.cgi', function(req, res){
	console.log(req.body);
	var ans = writer.list();
	console.log(ans);
	res.send(ans);
	res.end();
});

app.get('/del.cgi', function(req, res){
	var first;
	for(first in req.query) break; 
	var ans = writer.del(first);
	console.log(ans, first);
	res.send(ans);
	res.end();
});

app.get('/open.cgi', function(req, res){
	var first;
	for(first in req.query) break; 
	var ans = writer.open(first);
	console.log(first);
	res.send(ans);
	res.end();
});

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
