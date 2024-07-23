const { knex } = require('./connectionKnex')

const getAllAdmins = async () => {
    try {        
        const res = await knex.select().from(`administrators`)
        return res
    } catch (error) {
        throw new error
    }
}

const getAdminById = async (id) => {
  try {
    const res = await knex.select('*').from('administrators')
        .where('id','=', id).first()
        return res
    } catch (error) {
      throw new Error(error)
   }}


const addAdmin = async (newAdmin) => {
  const AdminId = await knex('administrators').insert(newAdmin)
  return AdminId
}

const updateAdmin = async (id, Admin) =>{
    try {
      const affectedRows = await knex('administrators')
        .where({ id })
        .update(Admin);
      console.log('Admin updated successfully');
      return affectedRows;
    } catch (error) {
      console.error('Error updating Admin:', error);
      throw Error(error)
    }
}

const removeAdmin = async (id) =>{
    try {
      const affectedAdmin = await knex('administrators')
        .where({ id })
        .delete();
      console.log('Admin delete successfully');
      return affectedAdmin;
    } catch (error) {
      console.error('Error delete Admin:', error);
      throw Error(error);
    }
}

const getAdminByUserName = async (userName) => {
    try {        
        const res = await knex.select('*').from(`administrators`)
        .where('user_name','=', userName).first()
        return res
    } catch (error) {
        throw new Error(error)
    }
}

const getAdminByPassword = async (Password) => {
  try {        
      const res = await knex.select('*').from(`administrators`)
      .where('Password','=', Password)
      return res
  } catch (error) {
      throw new Error(error)
  }
}

module.exports = {
    getAllAdmins,
    getAdminById,
    addAdmin,
    updateAdmin,
    removeAdmin,
    getAdminByUserName,
    getAdminByPassword
}