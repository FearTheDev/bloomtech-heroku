require('dotenv').config();

const express = require('express');
const server = express();

const port = process.env.PORT || 9000;

server.use(express.json());

server.get('/', (req, res) =>{
  res.status(200).send(`<h1>Server is running: ${port}</h1>`);
  return;
});


server.listen(port, () =>{
  console.log(`Server is running on port: ${port}`);
});