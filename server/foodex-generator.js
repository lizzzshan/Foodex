'use strict';
 
const yelp = require('yelp-fusion');
const client = yelp.client('YI4jnnsErWoY10FSViKtnkbdu6N5TbcbGN6k2RSQfdWlL5reXu5X6Wm6O2dc1yvwK9As6nlVudEF_lZSvCNSGz0HBA9Fr9RL1Oa_sEQJCIPfjOKmr8YJumdH0GqhY3Yx');
 
client.search({
  term: 'Four Barrel Coffee',
  location: 'san francisco, ca',
}).then(response => {
  console.log(response.jsonBody.businesses[0].name);
}).catch(e => {
  console.log(e);
});