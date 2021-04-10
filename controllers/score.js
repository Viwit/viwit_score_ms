const Entity = require('../models/entity');
// GET doesn't support body through axios
exports.getScore = (req, res, next) => {
  const id = parseInt(req.query.id);
  const kind = parseInt(req.query.kind);

  Entity.find(id, kind)
    .then((entity) => {
      res.status(200).json({ id: entity._id, score: entity.score });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        message: err.message,
      });
    });
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
            .catch((err) => {
              response.status(400).json({
                message: err.message,
              });
            });
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
            .catch((err) => {
              response.status(400).json({
                message: err.message,
              });
            });
        }
      })
      .catch((err) => {
        response.status(400).json({
          message: err.message,
        });
      });
  }
};
