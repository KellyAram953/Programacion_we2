// node/express/app.js
const express = require('express');
const app = express();
const port = 3027;

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hola Kelly desde Express');
});

app.listen(port, () => {
  console.log(`Servidor Express: http://127.0.0.1:${port}`);
});