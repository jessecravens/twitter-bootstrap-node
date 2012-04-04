
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Index' })
};

exports.example1 = function(req, res){
  res.render('example1', { title: 'Example1' })
};

exports.example2 = function(req, res){
  res.render('example2', { title: 'Example2' })
};

exports.example3 = function(req, res){
  res.render('example3', { title: 'Example3' })
};