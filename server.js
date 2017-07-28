'use strict'

// a fair amount of the following code has been taken from demos and pair assignments

const pg = require('pg');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');
const app = express();
const conString = process.env.CONNECTION_STRING || `postgres://postgres:${process.env.PG_PASSWORD}@localhost:5432/kilovolt`;
const PORT = process.env.PORT || 3000;
app.use(express.static('./public'));
app.listen(PORT, function() {
  console.log(`App is listening on: ${PORT}`);
})
const client = new pg.Client(conString);
const proxy = require('express-request-proxy');
