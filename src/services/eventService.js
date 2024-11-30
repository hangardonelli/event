const clickhouse = require("../config/db");
const redisClient = require('../config/redis');
const validator = require("validator");

const getEventsByDate = async (date) => {
  try {
    if (!validator.isDate(date)) {
      throw new Error("Fecha no válida");
    }
    
    const escapedDate = `'${date.replace("'", "''")}'`;

    const cachedEvents = await redisClient.get(date);
    if (cachedEvents) {
      console.log("Returning events from cache.");
      return JSON.parse(cachedEvents); 
    }

    console.log("Fetching events from database.");
    const query = `SELECT * FROM events WHERE startDate = ${escapedDate} FORMAT JSON`;
    const events = await clickhouse.query(query).toPromise();
    
    await redisClient.set(date, JSON.stringify(events), 'EX', 3600);

    return events;
  } catch (error) {
    console.log(error);
    throw new Error("Error en eventService");
  }
};

module.exports = { getEventsByDate };
