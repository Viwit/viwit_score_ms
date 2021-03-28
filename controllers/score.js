const Entity = require('../models/entity');

exports.getScore = (req, res, next) => {
  res.status(200).json({ scores: [{ score1: 5, score2: 1 }] });
};

exports.putScore = (req, res, next) => {
  const id = req.body.id;
  const kind = req.body.kind;
  const score = req.body.score;
  Entity.find(id)
    .then((entity) => {
      if (entity) {
        console.log('EXISTS IN THE DATABASE');
      } else {
        const entity = new Entity(id, kind);
        entity
          .save()
          .then(
            res.status(201).json({
              message: 'Entity registered successfully!',
              id: id,
              kind: kind,
              score: score,
            })
          )
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log(err));
};
