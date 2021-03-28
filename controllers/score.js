const Entity = require('../models/entity');

exports.getScore = (req, res, next) => {
  const id = req.body.id;
  const kind = req.body.kind;
  Entity.find(id, kind)
    .then((entity) => {
      res.status(200).json({ id: entity._id, score: entity.score });
    })
    .catch((err) => console.log(err));
};

exports.putScore = (req, response, next) => {
  const id = req.body.id;
  const kind = req.body.kind;
  const score = req.body.score;

  if (score > 5 || score < 0) {
    response.status(400).json({
      message: 'Invalid Score',
    });
  } else {
    Entity.find(id, kind)
      .then((entity) => {
        if (entity) {
          Entity.insertScore(entity, score)
            .then(
              response.status(201).json({
                message: 'Score inserted successfully!',
              })
            )
            .catch((err) => console.log(err));
        } else {
          const entity = new Entity(id, kind, score);
          entity
            .save()
            .then(
              response.status(201).json({
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
  }
};
