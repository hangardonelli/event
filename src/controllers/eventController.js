const { getEventsByDate } = require("../services/eventService");

const mockEvents = [
    {
      startDate: "1942-09-15",
      endDate: null,
      lat: 48.7236,
      lon: 44.514,
      description: "Intense combat in the northern suburbs of Stalingrad.",
      eventType: "Combat",
    },
    {
      startDate: "1942-09-17",
      endDate: null,
      lat: 48.7123,
      lon: 44.5221,
      description: "German forces push deeper into the city.",
      eventType: "Advance",
    },
    {
      startDate: "1942-09-20",
      endDate: null,
      lat: 48.699,
      lon: 44.5092,
      description: "Soviet forces launch counterattacks on the Volga.",
      eventType: "Counterattack",
    },
  ];
  

  const getEventsByDateController = async (req, res) => {
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

module.exports = { getEventsByDateController };
