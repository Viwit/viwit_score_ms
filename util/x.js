const MongoClient = require('mongodb').MongoClient;
 
const username = 'admin'
const pw = 'viwitadmin';
const db = 'scoredb';
 
const mongoConnect = (callback) => {
  const uri = `mongodb+srv://${username}:${pw}@cluster0.roy9m.mongodb.net/${db}?retryWrites=true&w=majority`;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client.connect((err) => {
    const collection = client.db('scoredb').collection('scoredb');
    // perform actions on the collection object
    callback(collection);
    client.close();
  });
};
 
module.exports = mongoConnect;