const express = require('express');
const { getEventsByDate } = require('../controllers/eventController');

const router = express.Router();

router.get('/events/:date', getEventsByDate);

module.exports = router;
