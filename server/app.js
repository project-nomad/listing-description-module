const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');

const app = express();

app.use('/listings/:id', express.static(path.resolve(__dirname, '../public')));
app.use(bodyParser.json());

app.get('/listings/:listingId/overview', (req, res) => {
  db.getListingOverview(req.params.listingId, (err, results) => {
    if (err) {
      res.status(500);
      res.end();
    } else {
      res.send(results);
    }
  });
});

app.get('/listings/:listingId/arrangements', (req, res) => {
  db.getSleepingDetails(req.params.listingId, (err, results) => {
    if (err) {
      res.status(500);
      res.end();
    } else {
      res.send(results);
    }
  });
});

module.exports = app;
