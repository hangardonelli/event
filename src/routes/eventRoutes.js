import express from 'express';
import { getEventsByDateController } from '../controllers/eventController.js';

const router = express.Router();

router.get('/events/:date', getEventsByDateController);

export default router;
