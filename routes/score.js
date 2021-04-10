const express = require('express');

const router = express.Router();

const scoreController = require('../controllers/score');

// GET /score
router.get('/score', scoreController.getScore);

// PUT /score
router.put('/score', scoreController.putScore);

module.exports = router;
