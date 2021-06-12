
const express = require('express');
const dataApi = require('./api/data');
const dateApi = require('./api/date');

const app = express()
const port = 3001

app.get('/api/data', dataApi);
app.get('/api/date', dateApi);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});