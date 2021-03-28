const getDb = require('../util/database').getDb;

class User {
  constructor(id, score, scores) {
    this.id = id;
    this.score = score;
    this.scores = scores;
  }

  save() {}
}
