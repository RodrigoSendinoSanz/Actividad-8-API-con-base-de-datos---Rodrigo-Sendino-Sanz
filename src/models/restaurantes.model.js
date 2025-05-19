const db = require('../config/db');

// SELECT * FROM restaurante;
const selectAll = async (page, limit) => {
    const [result] = await db.query(`
        select * from restaurante
        limit ?
        offset ?
    `, [limit, (page - 1) * limit]);
    return result;
}

/**
 * Obtiene un restaurante por su ID desde la base de datos.
 *
 * @async
 * @function
 * @param {number} restauranteId - El ID del restaurante que se quiere buscar.
 * @returns {Promise<Object|null>} Un objeto con los datos del restaurante si existe, o `null` si no se encuentra.
 */
const selectById = async (restauranteId) => {
    const [result] = await db.query('select * from restaurante where id = ?', [restauranteId]);
    if (result.length === 0) return null;
    return result[0];
}

const insert = async ({ nombre, direccion, tipo_cocina, telefono, valoracion, capacidad }) => {
    const [result] = await db.query(`
        insert into restaurante (nombre, direccion, tipo_cocina, telefono, valoracion, capacidad, fecha_creacion) values (?, ?, ?, ?, ?, ?, ?)    
    `, [nombre, direccion, tipo_cocina, telefono, valoracion, capacidad, new Date()]);
    return result;
}

module.exports = {
    selectAll, selectById, insert
}
