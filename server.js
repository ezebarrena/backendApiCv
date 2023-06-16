const express = require('express');


const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Hello asd!')
});

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});

module.exports = app;
