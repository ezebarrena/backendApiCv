const express = require('express');
const {dbConnection} = require('./src/db/config');
const cors = require('cors');
const app = express();

require('dotenv').config();


app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

dbConnection();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Hello asd!')
});

app.use("/usuarios", require('./src/routes/usuarios.routes'));
app.use("/mensajes", require('./src/routes/mensajes.routes'));

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});

module.exports = app;
