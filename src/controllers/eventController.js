import { getEventsByDate } from "../services/eventService.js";
import logger from "../config/logger.mjs";

export const getEventsByDateController = async (req, res) => {
  const { date } = req.params;
  try {
    const events = await getEventsByDate(date);
    res.json(events); 
  } catch (error) {
    logger.error(`Error in ${getEventsByDateController.name}: ${JSON.stringify(error)}`)
    res.status(500).json({ error: 'An error occurred while retrieving events.' });
  }
};

