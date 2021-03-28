exports.getScore = (req, res, next) => {
  res.status(200).json({ scores: [{ score1: 5, score2: 1 }] });
};

exports.putScore = (req, res, next) => {
  const id = req.body.id;
  const score = req.body.score;
  res.status(201).json({
    message: 'Score registered successfully!',
    id: id,
    score: score
  });
};
