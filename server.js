require('dotenv').config();
const express = require('express');
const {dbConnection} = require('./src/db/config');


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
dbConnection();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Hello asd!')
});

app.use("/usuarios", require('./src/routes/usuarios.routes'));

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});

module.exports = app;
