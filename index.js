const express = require("express");
require('dotenv').config()
const path = require("path");

const app = express();

// body parser middlware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server start on port ${port}`);
});