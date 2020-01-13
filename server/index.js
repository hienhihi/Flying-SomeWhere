var express = require('express');
var bodyParser = require('body-parser');
var controller = require('./controllers.js');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');


var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/recipes', function (req, res) {
  controller.getRecipes(req, res);
});

app.post('/search/recipes', (req, res) => {
  console.log(req.body);
  controller.searchRecipes(req.body, res);

})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

