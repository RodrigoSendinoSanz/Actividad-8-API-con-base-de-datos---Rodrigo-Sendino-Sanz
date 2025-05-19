const router = require('express').Router();

const { getAll, getById, create } = require('../../controllers/restaurantes.controller');

// GET /api/restaurantes
router.get('/', getAll);
router.get('/:restauranteId', getById);

router.post('/', create);

module.exports = router;