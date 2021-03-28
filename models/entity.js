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
      .then(console.log('entity inserted'))
      .catch((err) => console.log(err));
  }

  static find(id, kind) {
    const db = getDb();
    return db
      .collection('entities')
      .findOne({ _id: id, kind: kind })
      .then((entity) => {
        console.log('entity fetch');
        return entity;
      })
      .catch((err) => console.log(err));
  }

  static async insertScore(entity, score) {
    const db = getDb();
    await entity.scores.push(score);
    const avg = this.calcAvg(entity.scores);
    return db
      .collection('entities')
      .updateOne(
        { _id: entity._id },
        { $set: { score: avg, scores: entity.scores } }
      )
      .then((res) => {
        console.log('entity updated');
      })
      .catch((err) => console.log(err));
  }

  static calcAvg(scores) {
    let sum = 0;
    scores.forEach((element) => {
      sum += element;
    });
    const avg = sum / scores.length;
    return avg;
  }
}

module.exports = Entity;
