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
  

const getEventsByDate = (req, res) => {
  const { date } = req.params;
  const events = mockEvents;
  const filteredEvents = events.filter((event) => event.date === date);
  res.json(filteredEvents);
};

module.exports = { getEventsByDate };
