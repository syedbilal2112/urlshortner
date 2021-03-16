"use strict";

const serverInit = require('./app/models/db');
const constant = require('./utils/constant');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  limit: "5mb",
  extended: true,
  parameterLimit: 500000
}));
// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

app.use('/shortUrl', require('./app/controller/shortUrlController'));

app.listen(constant.PORT, function () {
  console.log("App started at", constant.PORT)
});
module.exports = app;

serverInit.mongoDbInit();