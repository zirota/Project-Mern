// Express backend

import express from 'express';
// const express = require('express');

const app = express();
const PORT = 8080 || process.env.SERVER_PORT;

app.use(express.static('dist'));

app.get('/', (req, res) => {
  // Make database call
  // get result

  res.send('HELLO WORLD');
});

app.get('/api/healthcheck', (req, res) => {
  res.send({ healthcheck: 'helloworld' });
});

app.post('/', (req, res) => {
  // username, password
  // req.body.username
  // Make db call
});

app.get('/myendpoint', (req, res) => {
  res.send('WELCOME TO ANOTHER PART OF MY WEBSITE');
});

app.listen(PORT, () => {
  console.log(`hello-mern express listening on port ${PORT}!`);
});
