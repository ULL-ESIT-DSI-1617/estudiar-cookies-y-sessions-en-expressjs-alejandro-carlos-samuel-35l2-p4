var express = require('express')
var app = express()
var path = require('path');
var cookieParser = require('cookie-parser');

app.use(cookieParser());

app.use('/usuario/:id', function (req, res, next) {
  res.send('Mira la consola!');
  console.log('Request Type:', req.method);   // GET
  console.log('Request Path:', req.path);     // /
  console.log('Request Host:', req.hostname); // localhost
  console.log('Request IP:', req.ip);         // 127.0.0.1
  console.log('Request cookies:', req.cookies); // { request_method: 'GET', ...
  console.log('req.params.id: '+(req.params.id)); // req.params.id: casiano
  next();
});

// respond with "Hello World!" on the homepage
app.get('/', function (req, res) {
  res.send('Hello World!');
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
