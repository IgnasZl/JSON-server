const express = require('express');
const app = express();
let news = require('./news');
let teams = require('./teams');
let clips = require('./clips');


const port = process.env.PORT || 5005;

app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.get('/news', (req, res)=>{
  res.json({
    news
  })
});

app.get('/teams', (req, res)=>{
  res.json({
    teams
  })
});

app.get('/clips', (req, res)=>{
  res.json({
    clips
  })
});


app.listen(port, () => {

});