// routes/posts.js

const router = require('express').Router();
const ctrl = require('../controllers/posts');

// GET /api/posts
router.get('/', ctrl.getAll);

// GET /api/posts/:id
router.get('/:id', ctrl.getById);

// POST /api/posts
router.post('/', ctrl.create);

module.exports = router;
