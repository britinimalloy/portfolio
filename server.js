'use strict'

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.post('/articles', function(request, response) {
  response.send('Recorded to server');
})

app.listen(PORT, function() {
  //there was a console log here in the demo and pair lab, I put the function in anyway in case we need it later
});
