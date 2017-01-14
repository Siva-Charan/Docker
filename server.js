'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('<center><h1>Welcome to my Demo</h1><h3>You have successfully launched Node JS App.</h3></center>');
});

app.listen(PORT);
console.log('Server Running on http://localhost:' + PORT);