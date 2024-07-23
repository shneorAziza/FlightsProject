const { knex } = require('./connectionKnex')

const getAllCustomers = async () => {
    try {        
        const res = await knex.select().from(`customers`)
        return res
    } catch (error) {
        throw new error
    }
}

const getCustomerById = async (id) => {
  try {
    const res = await knex.select('*').from('customers')
        .where('id','=', id).first()
        return res
    } catch (error) {
      throw new Error(error)
   }}


const addCustomer = async (newCustomer) => {
  const customerId = await knex('customers').insert(newCustomer)
  return customerId
}

const updateCustomer = async (id, customer) =>{
    try {
      const affectedRows = await knex('customers')
        .where({ id })
        .update(customer);
      console.log('Customer updated successfully');
      return affectedRows;
    } catch (error) {
      console.error('Error updating customer:', error);
      throw error;
    }
}

const removeCustomer = async (id) =>{
    try {
      const affectedCustomer = await knex('customers')
        .where({ id })
        .delete();
      console.log('Customer delete successfully');
      return affectedCustomer;
    } catch (error) {
      console.error('Error delete customer:', error);
      throw error;
    }
}

const getCustomerByUserName = async (userName) => {
    try {        
        const res = await knex.select('*').from(`customers`)
        .where('user_name','=', userName).first()
        return res
    } catch (error) {
        throw new Error(error)
    }
}

const getCustomerPassword = async (password) => {
  try {        
      const res = await knex.select('*').from(`customers`)
      .where('password','=', password)
      return res
  } catch (error) {
      throw new Error(error)
  }
}

module.exports = {
    getAllCustomers,
    getCustomerById,
    addCustomer,
    updateCustomer,
    removeCustomer,
    getCustomerByUserName,
    getCustomerPassword
}