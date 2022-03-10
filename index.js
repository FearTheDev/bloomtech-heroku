const express = require('express');

const server = express();

const port = 9000;
const host = '127.0.0.1';

server.use(express.json());

server.get('/', (req, res) =>{
  res.status(200).send(`<h1>Server is running: ${port}</h1>`);
  return;
});


server.listen(port, host, () =>{
  console.log(`Server is running on port: ${port}`);
});