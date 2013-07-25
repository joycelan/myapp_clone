
/*
 * GET contactus listing.
 */
exports.contactus = function(req, res){
  res.render('contactus', { title: '聯絡我們' });
  res.send("respond with a resource");
};
exports.contactus_en = function(req, res){
  res.render('contactus_en', { title: 'Contact Us' });
  res.send("respond with a resource");
};
