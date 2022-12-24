'use strict';
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000; 


app.get('/', (req, res) => {
 
  const yelp = require('yelp-fusion');
  const client = yelp.client('YI4jnnsErWoY10FSViKtnkbdu6N5TbcbGN6k2RSQfdWlL5reXu5X6Wm6O2dc1yvwK9As6nlVudEF_lZSvCNSGz0HBA9Fr9RL1Oa_sEQJCIPfjOKmr8YJumdH0GqhY3Yx');
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
