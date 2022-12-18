const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000; 


app.get('/', (req, res) => {
  res.json({'fuck': 'bitch'});
});

app.listen(PORT, () => console.log('Example app is listening on port 3000.'));
