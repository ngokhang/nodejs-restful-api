require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT;
const { configViewEngine } = require('./config/viewEngine');
const { router } = require('./routes/web');
const routerAPI = require('./routes/api');
const fileUpload = require('express-fileupload');
const connection = require('./config/database');
const { MongoClient } = require('mongodb');

// use express-fileupload
app.use(fileUpload());

// config req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// config view engine
configViewEngine(app);

// use router module
app.use('/', router);
app.use('/v1/api', routerAPI);

(async () => {
  const url = process.env.DB_HOST;
  const client = new MongoClient(url);
  const dbName = process.env.DB_NAME;
  try {
    // await connection();
    await client.connect();
    console.log('Connected successfully to Server');
    const db = client.db(dbName);
    const collection = db.collection('customers');

    // collection.insertOne({
    //   name: 'Ngo Phu Khang',
    //   address: 'Da Nang',
    //   phone: '0123456789',
    //   email: 'khangdeptry@gmail.com',
    // });

    let result = await collection.findOne({ name: 'Ngo Phu Khang' });
    console.log(result);

    app.listen(port, () => {
      console.log(`Your app is listening on port ${port}`)
    });
  } catch (error) {
    console.log(">> Error connect to DB : ", error);
  }
})();
