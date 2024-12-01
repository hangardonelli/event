import { getEventsByDate } from "../services/eventService.js";

export const getEventsByDateController = async (req, res) => {
  const { date } = req.params;
  try {
    console.log(date);
    const events = await getEventsByDate(date);
    res.json(events); 
  } catch (error) {
    console.error('Error in getEventsByDateController:', error.message);
    res.status(500).json({ error: 'An error occurred while retrieving events.' });
  }
};


