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
    return db.collection('entities')
      .insertOne(this)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
}

module.exports = Entity;