const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');

const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(bodyParser.json());

app.get('/overview/listingId/:listingId', (req, res) => {
  db.getListingOverview(req.params.listingId, (err, results) => {
    if (err) {
      res.status(500);
    } else {
      res.send(results);
    }
  });
});

app.get('/sleepingdetails/listingId/:listingId', (req, res) => {
  db.getSleepingDetails(req.params.listingId, (err, results) => {
    if (err) {
      res.status(500);
    } else {
      res.send(results);
    }
  });
});

module.exports = app;
