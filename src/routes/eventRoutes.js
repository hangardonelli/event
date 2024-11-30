const express = require('express');
const { getEventsByDateController } = require('../controllers/eventController');

const router = express.Router();

router.get('/events/:date', getEventsByDateController);

module.exports = router;
