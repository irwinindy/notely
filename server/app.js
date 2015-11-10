var express = require('express');
var app = express();

app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/notes', function(req, res){
  res.json([
    {
      title: 'Hardcoded Note',
      body_html: 'This is the body'
    },
    {
      title: 'Another one',
      body_html: 'This is another body'

    }
  ]);
});

app.listen(3000, function(){
  console.log('Listen on http://localhost:3000');
});
