const getDb = require('../util/database').getDb;

class Entity {
  constructor(id, kind) {
    this.id = id;
    this.kind = kind;
  }

  score = 0;
  scores = {};

  save() {
    const db = getDb();
    return db
      .collection('entities')
      .insertOne(this)
      .then((res) => console.log('entity inserted'))
      .catch((err) => console.log(err));
  }

  static find(id) {
    const db = getDb();
    return db
      .collection('entities')
      .find({ id: id })
      .toArray()
      .then((entity) => {
        console.log('entity fetched');
        return entity[0];
      })
      .catch((err) => console.log(err));
  }
}

module.exports = Entity;
