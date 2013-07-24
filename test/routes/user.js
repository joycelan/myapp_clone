
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.render('list', { title: 'User' });
  res.send("respond with a resource");
};
