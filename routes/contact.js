
/*
 * GET contactus listing.
 */
exports.contactus = function(req, res){
  res.render('contactus', { title: '聯絡我們' });
};
exports.contactus_en = function(req, res){
  res.render('contactus_en', { title: 'Contact Us' });
};
