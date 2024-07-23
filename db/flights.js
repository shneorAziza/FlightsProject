const { knex } = require('./connectionKnex')

const getAllFlights = async () => {
    try {        
        const res = await knex.select().from(`Flights`)
        return res
    } catch (error) {
        throw new Error(error)
    }
}



const getFlightById = async (id) => {
  try {
    const res = await knex.select('*').from('Flights')
        .where('id','=', id).first()
        return res
    } catch (error) {
      throw new Error(error)
   }}


const addFlight = async (newFlight) => {
  const FlightId = await knex('Flights').insert(newFlight)
  return FlightId
}

const updateFlight = async (id, Flight) =>{
    try {
      const affectedRows = await knex('Flights')
        .where({ id })
        .update(Flight);
      console.log('Flight updated successfully');
      return affectedRows;
    } catch (error) {
      console.error('Error updating Flight:', error);
      throw Error(error)
    }
}

const removeFlight = async (id) =>{
    try {
      const affectedFlight = await knex('Flights')
        .where({ id })
        .delete();
      console.log('Flight delete successfully');
      return affectedFlight;
    } catch (error) {
      console.error('Error delete Flight:', error);
      throw Error(error);
    }
}

const getAllFlightsForCustomer = async () => {
  try {        
      const res = await knex('flights')
      .select('flights.id', 'flights.departure_time', 'airline_companies.name', 
              'origin_countries.name as origin_country', 
              'destination_countries.name as destination_country')
      .join('airline_companies', 'airline_companies.id', 'flights.airline_company_id')
      .join('countries as origin_countries', 'origin_countries.id', 'flights.origin_country_id')
      .join('countries as destination_countries', 'destination_countries.id', 'flights.destination_country_id')
      return res
  } catch (error) {
      throw new Error(error)
  }
}
const getFlightsForCustomerById = async (id) => {
  try {        
      const res = await knex('flights')
      .select('flights.*', 'airline_companies.name', 
              'origin_countries.name as origin_country', 
              'destination_countries.name as destination_country')
      .join('airline_companies', 'airline_companies.id', 'flights.airline_company_id')
      .join('countries as origin_countries', 'origin_countries.id', 'flights.origin_country_id')
      .join('countries as destination_countries', 'destination_countries.id', 'flights.destination_country_id')
      .where('flights.id',"=", id).first()
      return res
  } catch (error) {
      throw new Error(error)
  }
}


module.exports = {
    getAllFlights,
    getFlightById,
    addFlight,
    updateFlight,
    removeFlight,
    getAllFlightsForCustomer,
    getFlightsForCustomerById
}