'use strict';
const express = require('express');
const keys = require('./config/keys')

const app = express();
const PORT = process.env.PORT || 3000; 


app.get('/', (req, res) => {
 
  const yelp = require('yelp-fusion');
  const client = yelp.client(keys.yelpKey);
  const index = Math.floor(Math.random() * 10) + 1;
  
  client.search({
    term: 'Pizza', 
    location: 'san francisco, ca',
  }).then(response => {

    console.log(response.jsonBody.businesses[index].name);
  }).catch(e => {
    console.log(e);
  });
  res.json({'peepee': 'poopoo'});
});

app.listen(PORT, () => console.log('Example app is listening on port 3000.'));
