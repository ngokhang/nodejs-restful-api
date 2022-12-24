require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT;
const { configViewEngine } = require('./config/viewEngine');
const { router } = require('./routes/web');

const connection = require('./config/database');

// config req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// config view engine
configViewEngine(app);

// use router module
app.use(router);

connection();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})