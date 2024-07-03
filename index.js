const express = require("express");
require('dotenv').config();
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send(`Hello You we are on AWS!..! ${process.env.HELLO_WORLD} ${process.env.API_SECRET}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
