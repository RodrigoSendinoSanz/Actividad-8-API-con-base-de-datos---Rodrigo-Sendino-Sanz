// routes/authors.js

const router = require('express').Router();
const ctrl = require('../controllers/authors');

// GET /api/authors
router.get('/', ctrl.getAll);

// GET /api/authors/:id
router.get('/:id', ctrl.getById);

// POST /api/authors
router.post('/', ctrl.create);

// GET /api/authors/:id
router.get('/:id/posts', ctrl.getPosts);


module.exports = router;
