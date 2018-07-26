const express = require('express');
const app = express();
let news = require('./news');
let teams = require('./teams');
let clips = require('./clips');


const port = process.env.PORT || 5005;

app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/news', function(req, res, next) {
  res.json({
    news
  });
  next()
});

app.get('/clips', function(req, res, next) {
  res.json({
    teams
  });
  next()
});

app.get('/teams', function(req, res, next) {
  res.json({
    clips
  });
  next()
});


app.listen(port, () => {

});