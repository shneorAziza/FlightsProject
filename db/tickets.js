const { knex } = require('./connectionKnex')

const getAllTickets = async () => {
    try {        
        const res = await knex.select().from(`Tickets`)
        return res
    } catch (error) {
        throw new Error(error)
    }
}

const getTicketById = async (id) => {
  try {
    const res = await knex.select('*').from('Tickets')
        .where('id','=', id).first()
        return res
    } catch (error) {
      throw new Error(error)
   }}


const addTicket = async (newTicket) => {
  const TicketId = await knex('Tickets').insert(newTicket)
  return TicketId
}

const updateTicket = async (id, Ticket) =>{
    try {
      const affectedRows = await knex('Tickets')
        .where({ id })
        .update(Ticket);
      console.log('Ticket updated successfully');
      return affectedRows;
    } catch (error) {
      console.error('Error updating Ticket:', error);
      throw Error(error)
    }
}

const removeTicket = async (id) =>{
    try {
      const affectedTicket = await knex('Tickets')
        .where({ id })
        .delete();
      console.log('Ticket delete successfully');
      return affectedTicket;
    } catch (error) {
      console.error('Error delete Ticket:', error);
      throw Error(error);
    }
}


module.exports = {
    getAllTickets,
    getTicketById,
    addTicket,
    updateTicket,
    removeTicket
}