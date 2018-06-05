const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');

const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(bodyParser.json());

app.get('/overview', (req, res) => {
  db.getListingOverview((err, results) => {
    if (err) {
      throw err;
    } else {
      res.send(results);
    }
  });
});

module.exports = app;
