const Restaurante = require('../models/restaurantes.model');

const getAll = async (req, res) => {
    const { page = 1, limit = 5 } = req.query;

    const restaurantes = await Restaurante.selectAll(
        Number(page), Number(limit)
    );

    res.json({
        page,
        limit,
        results: restaurantes
    });
}

const getById = async (req, res) => {
    const { restauranteId } = req.params;

    const restaurante = await Restaurante.selectById(restauranteId);
    if (!restaurante)
        return res.status(404)
            .json({ message: 'El ID del restaurante no existe' });

    res.json(restaurante);
}

const create = async (req, res) => {
    // req.body
    const result = await Restaurante.insert(req.body);
    const restaurante = await Restaurante.selectById(result.insertId);
    res.json(restaurante);
}

module.exports = { getAll, getById, create }