const express = require('express');

const router = express.Router();

const scoreController = require('../controllers/score');

// GET /scores
router.get('/scores', scoreController.getAllScores)

// GET /score
router.get('/score', scoreController.getScore);

// PUT /score
router.put('/score', scoreController.putScore);

module.exports = router;
