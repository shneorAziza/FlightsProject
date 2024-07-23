const { knex } = require('./connectionKnex')

const getAllAirlineCompanies = async () => {
    try {        
        const res = await knex.select().from(`airline_companies`)
        return res
    } catch (error) {
        throw new Error (error)
    }
}

const getAirlineCompaniesById = async (AirlineCompaniesId) => {
  try {
    const res = await knex.select('*').from('airline_companies')
        .where('id','=', AirlineCompaniesId).first()
        return res
    } catch (error) {
      throw new Error(error)
   }}

const addAirlineCompanies = async (newAirlineCompanies) => {
  const airlineCompaniesId = await knex('airline_companies').insert(newAirlineCompanies)
  return airlineCompaniesId
}

const updateAirlineCompanies = async (id, airlineCompanies) =>{
    try {
      const affectedRows = await knex('airline_companies')
        .where({ id })
        .update(airlineCompanies);
      console.log('airline companies updated successfully');
      return affectedRows;
    } catch (error) {
      console.error('Error updating airline companies:', error);
      throw error;
    }
}

const removeAirlineCompanies = async (id) =>{
    try {
      const affectedAirlineCompanies = await knex('airline_companies')
        .where({ id })
        .delete();
      console.log('airline companies delete successfully');
      return affectedAirlineCompanies;
    } catch (error) {
      console.error('Error delete airline companies:', error);
      throw error;
    }
}

const getAirlineCompaniesByUserName = async (userName) => {
    try {        
        const res = await knex.select('*').from(`airline_companies`)
        .where('name',"=", userName).first()
        return res
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    getAllAirlineCompanies,
    getAirlineCompaniesById,
    addAirlineCompanies,
    updateAirlineCompanies,
    removeAirlineCompanies,
    getAirlineCompaniesByUserName
}