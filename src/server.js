require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT;
const { configViewEngine } = require('./config/viewEngine');
const { router } = require('./routes/web');
const connection = require('./config/database');
const Kitten = require('./models/Kitten');

// config req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// config view engine
configViewEngine(app);

// use router module
app.use(router);

//create instance of document
// const cat = new Kitten({ name: 'Meo cua Khang', color: 'Vang' });
// cat.save();


(async () => {
  try {
    await connection();
    app.listen(port, () => {
      console.log(`Your app is listening on port ${port}`)
    });
  } catch (error) {
    console.log(">> Error connect to DB : ", error);
  }
})();
