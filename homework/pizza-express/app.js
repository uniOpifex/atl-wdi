// app.js

//require express package
var express = require('express');
//save an express module as 'app'
var app     = express();
// assigning 3000 as our port
var port    = 3000;

var hbs = require('hbs');

app.set("view engine", "hbs");
app.set('views', './views');

app.get("/order/:items", function(req, res, next){ 
  const type = req.query.type;
  const size = req.query.type;
  res.render("order.hbs", { message: req.params.});

});

// app.get('/topping/:type', function(req, res, next) {
  
//       res.send("/type Pizza!");
//   });

//   app.get('/order/:amount/:size', function(req, res, next) {
    
//          res.send("Your order for /amount /size will be ready in 1 minute!");
//   });

 


app.get('/', function(req, res, next) {
  
      res.send("Welcome to Pizza Express!");
  });

// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});
