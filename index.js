const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const typeform = require('./routes/typeform');

app.listen(port, () => {
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.json({ msg: 'Hello World' });
});


app.use('/typeform', typeform);