const clickhouse = require("../config/db");
const validator = require("validator");

const getEventsByDate = async (date) => {
  try {
    if (!validator.isDate(date)) {
      throw new Error("Fecha no válida");
    }
    const escapedDate = `'${date.replace("'", "''")}'`;

    const query = `SELECT * FROM events WHERE startDate = ${escapedDate} FORMAT JSON`;
    const events = await clickhouse.query(query).toPromise();
    return events;
  } catch (error) {
    console.log(error);
    throw new Error("Error en eventService");
  }
};

module.exports = { getEventsByDate };