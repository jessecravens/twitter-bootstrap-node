
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

// HTML Configuration
	// app.configure(function(){
	//   app.use(express.static(__dirname + '/public'));
	// 
	//   // disable layout
	//   app.set("view options", {layout: false});
	// 
	//   // make a custom html template
	//   app.register('.html', {
	//     compile: function(str, options){
	//       return function(locals){
	//         return str;
	//       };
	//     }
	//   });
	// });
	// 
	// app.configure('development', function(){
	//   app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
	// });
	// 
	// app.configure('production', function(){
	//   app.use(express.errorHandler());
	// });

// JADE Configuration ////////////////////////////////////////////////////////////////
	app.configure(function(){
	  app.set('views', __dirname + '/views');
	  app.set('view engine', 'jade');
	  app.use(express.bodyParser());
	  app.use(express.methodOverride());
	  // app.use(require('stylus').middleware({ src: __dirname + '/public' }));
	  app.use(app.router);
	  app.use(express.static(__dirname + '/public'));
	});

	app.configure('development', function(){
	  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
	});

	app.configure('production', function(){
	  app.use(express.errorHandler()); 
	});

// Jade Routes ////////////////////////////////////////////////////////////////////////
	
	app.get('/', routes.index);
	
	// app.get('/', function(req, res){
	//   res.render("index.jade");
	// });
	
    app.get('/example1', routes.example1);
	
	// app.get('/example1', function(req, res){
	//   res.render("example1.jade");
	// });
	
	app.get('/example2', routes.example2);
	app.get('/example3', routes.example3);


// HTML Routes
	// app.get('/', function(req, res){
	//   res.render("index.html");
	// });
	// app.get('/index.html', function(req, res){
	//   res.render("index.html");
	// });
	// app.get('/scaffolding.html', function(req, res){
	//   res.render("scaffolding.html");
	// });
	// app.get('/base-css.html', function(req, res){
	//   res.render("base-css.html");
	// });
	// app.get('/components.html', function(req, res){
	//   res.render("components.html");
	// });
	// app.get('/javascript.html', function(req, res){
	//   res.render("javascript.html");
	// });
	// app.get('/less.html', function(req, res){
	//   res.render("less.html");
	// });
	// app.get('/download.html', function(req, res){
	//   res.render("download.html");
	// });
	// app.get('/examples.html', function(req, res){
	//   res.render("examples.html");
	// });

app.listen(process.env.PORT || 3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);