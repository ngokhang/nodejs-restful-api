require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT;
const { configViewEngine } = require('./config/viewEngine');
const { router } = require('./routes/web');

// config view engine
configViewEngine(app);
// use router module
app.get('/', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})