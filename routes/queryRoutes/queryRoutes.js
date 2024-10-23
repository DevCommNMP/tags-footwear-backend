const express = require('express');
const { createQuery } = require('../../controller/query/queryController');
const router = express.Router();

// Route to create a new review
router.post('/queries', createQuery);

// router.get('/queries', getAllQueries);

module.exports = router;

