
/*
 * GET honpac_six listing.
 */
exports.honpac_six = function(req, res){
  res.render('honpac_six', { title: 'Honpac 六寶' });
};
exports.honpac_six_en = function(req, res){
  res.render('honpac_six_en', { title: 'Six Treasures of Honpac' });
};
