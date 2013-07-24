
/*
 * GET users listing.
 */
var writer = require( './write.js' );
exports.list = function(req, res){
  res.render('list', { title: 'User' });
  res.send("respond with a resource");
};
export.file = function(req, res){
  var result='';
  var k;
  console.log(req.body);
  k= JSON.stringify( req.body);
  var date = new Date();
  var time = date.getTime();
  writer.write( './message/'+req.body.title+' - '+ time +'.txt', k );
  res.end();
};
