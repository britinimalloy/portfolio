'use strict'

// a fair amount of the following code has been taken from demos and pair assignments

const pg = require('pg');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');
const app = express();
let conString = process.env.CONNECTION_STRING || `postgres://postgres:${process.env.PG_PASSWORD}@localhost:5432/kilovolt`;
const client = new pg.Client(conString);
const proxy = require('express-request-proxy');
