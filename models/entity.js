const getDb = require('../util/database').getDb;

class Entity {
  constructor(_id, kind, score) {
    this._id = _id;
    this.kind = kind;
    this.score = score;
    this.scores = [];
    this.scores.push(score);
  }

  save() {
    const db = getDb();
    return db
      .collection('entities')
      .insertOne(this)
      .then((res) => console.log('entity inserted'))
      .catch((err) => console.log(err));
  }

  /*  static pushScore(id, scores) {
    const db = getDb();
    return db
      .collection('entities')
      .updateOne({ _id: id }, { scores: scores })
      .then((res) => console.log('entity inserted'))
      .catch((err) => console.log(err));
  } */

  static findById(id) {
    const db = getDb();
    return db
      .collection('entities')
      .findOne({ _id: id })
      .then((entity) => {
        console.log('entity fetched');
        console.log(entity);
        return entity;
      })
      .catch((err) => console.log(err));
  }

  static insertScore(entity, score) {
    const db = getDb();
    entity.scores.push(score);
    return db
      .collection('entities')
      .updateOne({ _id: entity._id }, { $set: { scores: entity.scores } })
      .then((res) => {
        console.log('entity updated');
      })
      .catch((err) => console.log(err));
  }
}

module.exports = Entity;
