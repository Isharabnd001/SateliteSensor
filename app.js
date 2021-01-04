var express = require('express');
var app = express();
var date = new Date;
// Routes
app.get('/', function(req, res) {
  res.send({"health":"FAILED..",
"location":new Date().getMinutes()*(new Date().getHours()+1)
});
});

// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on localhost:'+ port);