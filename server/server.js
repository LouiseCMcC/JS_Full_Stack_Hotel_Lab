const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(express.json());
app.use(cors());

MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology: true})
.then((client) => {
  const db = client.db('hotel');
  const guestsCollection = db.collection('guests')
  const guestsRouter = createRouter(guestsCollection);
  app.use('/api/hotel', guestsRouter);
})
.catch(console.error);

app.listen(9000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});