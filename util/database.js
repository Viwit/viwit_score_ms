const MongoClient = require('mongodb').MongoClient;

let _db;

const username = 'admin';
const pw = 'viwitadmin';
const db = 'scoredb';

const mongoConnect = (callback) => {
  MongoClient.connect(
    `mongodb+srv://${username}:${pw}@cluster0.roy9m.mongodb.net/${db}?retryWrites=true&w=majority`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
    .then((client) => {
      console.log('Connected!');
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;