const { knex } = require('./connectionKnex')

const getAllCountries = async () => {
    try {        
        const res = await knex.select().from(`Countries`)
        return res
    } catch (error) {
        throw new Error(error)
    }
}

const getCountryById = async (id) => {
  try {
    const res = await knex.select('*').from('Countries')
        .where('id','=', id).first()
        return res
    } catch (error) {
      throw new Error(error)
   }}


const addCountry = async (newCountry) => {
  const CountryId = await knex('Countries').insert(newCountry)
  return CountryId
}

const updateCountry = async (id, Country) =>{
    try {
      const affectedRows = await knex('Countries')
        .where({ id })
        .update(Country);
      console.log('Country updated successfully');
      return affectedRows;
    } catch (error) {
      console.error('Error updating Country:', error);
      throw Error(error)
    }
}

const removeCountry = async (id) =>{
    try {
      const affectedCountry = await knex('Countrys')
        .where({ id })
        .delete();
      console.log('Country delete successfully');
      return affectedCountry;
    } catch (error) {
      console.error('Error delete Country:', error);
      throw Error(error);
    }
}


module.exports = {
    getAllCountries,
    getCountryById,
    addCountry,
    updateCountry,
    removeCountry
}