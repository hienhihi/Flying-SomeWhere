// var items = require('../database-mongo');
const axios = require('axios');

let getRecipes = (req, res) => {
  // items.selectAll(function(err, data) {
  //   if(err) {
  //     res.sendStatus(400);
  //   } else {
  //     res.status(200).send(data, 'ok');
  //   }
  // });
  res.status(200).send('ok');
}

let searchRecipes = (req, res) => {
  // let string = 'tomato, eggs';
  let links = `http://www.recipepuppy.com/api/?i=${req.in}&p=3`;
  // res.status(200).send('I got you');
  axios.get(links)
  .then(response => {
    // console.log(response.data);
    // console.log(response.data.explanation);
    res.status(200).send(JSON.stringify(response.data));
  })
  .catch(error => {
    console.log(error);
    res.status(400).send('no');
  });
}

module.exports = {
  getRecipes,
  searchRecipes
}